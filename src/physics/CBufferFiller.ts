/// <reference types="pixi.js" />

import * as FillBufferProgram from './shaderPrograms/FillBufferProgram'
import { BufferValue, makeUniform } from './BufferValue'
import { BufferComponents } from './BufferComponents';

export class CBufferFiller {

    constructor(renderer: PIXI.Renderer) {
        this.renderer = renderer;

        const program = PIXI.Program.from(FillBufferProgram.vertexShader, FillBufferProgram.fragmentShader);
        this.material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
            program: program
        });
    }

    fillRectangle(
        buffer: PIXI.RenderTexture,
        x: number,
        y: number,
        width: number,
        height: number,
        value: BufferValue,
        components: BufferComponents): void {

        const geometry = new PIXI.Geometry()
        .addAttribute('aVertex', 
            [x, y, 
             x + width, y, 
             x + width, y + height,
             x, y + height], 
            2)
        .addIndex([0, 1, 2, 0, 2, 3]);

        this.material.uniforms.uColor = makeUniform(value);

        const quad = new PIXI.Mesh(geometry, this.material);
        quad.state.blend = false;

        this.renderer.gl.colorMask(components.amlitude, components.velocity, components.damping, components.obstacle);
        this.renderer.render(quad, buffer, false);
        this.renderer.gl.colorMask(true, true, true, true);

        quad.destroy();
        geometry.destroy();
    }


    private readonly renderer: PIXI.Renderer;
    private readonly material: PIXI.MeshMaterial;
}