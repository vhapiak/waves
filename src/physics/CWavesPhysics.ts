/// <reference types="pixi.js" />

import * as IterationProgram from './shaderPrograms/IterationProgram'
import { CBufferFiller } from "./CBufferFiller";
import { CBufferGradientFiller } from './CBufferGradientFiller';
import { CAmplitudeAccessor } from './CAmplitudeAccessor';

export class CWavesPhysics {
    constructor(renderer: PIXI.Renderer, width: number, height: number) {
        this.renderer = renderer;
        this.width = width;
        this.height = height;
        this.bufferFiller = new CBufferFiller(renderer);
        this.bufferGradientFiller = new CBufferGradientFiller(renderer);

        this.activeBuffer = this.createBuffer(width, height);
        this.processingBuffer = this.createBuffer(width, height);

        const geometry = new PIXI.Geometry()
        .addAttribute('aVertex', 
            [0, 0, 
             width, 0, 
             width, height,
             0, height], 
            2) 
        .addAttribute('aUv', 
            [0, 0, 
             1, 0, 
             1, 1,
             0, 1], 
            2)
        .addIndex([0, 1, 2, 0, 2, 3]);

        const program = PIXI.Program.from(IterationProgram.vertexShader, IterationProgram.fragmentShader);
        const material = new PIXI.MeshMaterial(this.processingBuffer, {
            program: program,
            uniforms: {
                uPixelStep: {
                    x: 1 / width,
                    y: 1 / height
                }
            }
        });
        this.iterationQuad = new PIXI.Mesh(geometry, material);
        this.iterationQuad.state.blend = false;

        this.reset();
    }

    iterate(): void {
        const swap = this.activeBuffer;
        this.activeBuffer = this.processingBuffer;
        this.processingBuffer = swap;

        this.iterationQuad.material.texture = this.processingBuffer;
        this.renderer.render(this.iterationQuad, this.activeBuffer, true);
    }

    emitCircleWave(x: number, y: number, radius: number, value: number): void {
        this.bufferGradientFiller.fillCircle(
            this.activeBuffer,
            x,
            y,
            radius,
            {
                amlitude: 0.0,
                velocity: 0.0,
                damping: 0.0,
                obstacle: false
            },
            {
                amlitude: value,
                velocity: 0.0,
                damping: 0.0,
                obstacle: false
            },
            {
                amlitude: true,
                velocity: true,
                damping: false,
                obstacle: false
            });
    }

    putRectangleObstacle(x: number, y: number, width: number, height: number) {
        this.bufferFiller.fillRectangle(
            this.activeBuffer,
            x,
            y,
            width,
            height,
            {
                amlitude: 0.0,
                velocity: 0.0,
                damping: 0.0,
                obstacle: true
            },
            {
                amlitude: false,
                velocity: false,
                damping: false,
                obstacle: true
            });
    }

    makeAmplitudeAccessor(x: number, y: number, width: number, height: number): CAmplitudeAccessor {
        // todo: create once on init
        var buffer = new Float32Array(4 * width * height); // 4 components per pixel

        this.renderer.renderTexture.bind(this.activeBuffer);
        const gl = this.renderer.gl; 
        gl.readPixels(x, y, width, height, gl.RGBA, gl.FLOAT, buffer);
        return new CAmplitudeAccessor(buffer, width, height);
    }

    reset(): void {
        // set slight gradient damping on the edges to avoid reflactions   
        const pixelOffset = 40;
        const maxDampingOffset = 20 / 255;
        for (let i = 0; i <= pixelOffset; ++i) {
            this.bufferFiller.fillRectangle(
                this.activeBuffer,
                i,
                i,
                this.width - 2 * i,
                this.height - 2 * i,
                {
                    amlitude: 0.0,
                    velocity: 0.0,
                    damping: 1.0 - (pixelOffset - i) / pixelOffset * maxDampingOffset,
                    obstacle: false
                },
                {
                    amlitude: true,
                    velocity: true,
                    damping: true,
                    obstacle: true
                });
        }
    }

    getActivateBuffer(): PIXI.RenderTexture {
        return this.activeBuffer;
    }

    private createBuffer(width: number, height: number): PIXI.RenderTexture {
        const tex = new PIXI.BaseRenderTexture({
            width: width,
            height: height,
            scaleMode: PIXI.SCALE_MODES.NEAREST
        });
        tex.mipmap = PIXI.MIPMAP_MODES.OFF;
        tex.wrapMode = PIXI.WRAP_MODES.CLAMP;
        tex.format = PIXI.FORMATS.RGBA;
        tex.type = PIXI.TYPES.FLOAT;
        return new PIXI.RenderTexture(tex);
    }

    private readonly renderer: PIXI.Renderer;
    private readonly width: number;
    private readonly height: number;
    private readonly bufferFiller: CBufferFiller;
    private readonly bufferGradientFiller: CBufferGradientFiller;
    private readonly iterationQuad: PIXI.Mesh;

    private activeBuffer: PIXI.RenderTexture;
    private processingBuffer: PIXI.RenderTexture;
}