/// <reference types="pixi.js" />

import * as GradientFillBufferProgram from './shaderPrograms/GradientFillBufferProgram'
import { BufferValue, pushToArray } from './BufferValue'
import { BufferComponents } from './BufferComponents';

export class CBufferGradientFiller {

    constructor(renderer: PIXI.Renderer) {
        this.renderer = renderer;

        const program = PIXI.Program.from(GradientFillBufferProgram.vertexShader, GradientFillBufferProgram.fragmentShader);
        this.material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
            program: program
        });
    }

    fillCircle(
        buffer: PIXI.RenderTexture,
        x: number,
        y: number,
        radius: number,
        valueMin: BufferValue,
        valueMax: BufferValue,
        components: BufferComponents): void {

        // todo: caclulate number of points depending on radius
        const points = 10;
        const vertices = [
            0, 0,
            radius * Math.cos( 0 * Math.PI / 4), radius * Math.sin( 0 * Math.PI / 4),
            radius * Math.cos( 1 * Math.PI / 4), radius * Math.sin( 1 * Math.PI / 4),
            radius * Math.cos( 2 * Math.PI / 4), radius * Math.sin( 2 * Math.PI / 4),
            radius * Math.cos( 3 * Math.PI / 4), radius * Math.sin( 3 * Math.PI / 4),
            radius * Math.cos( 4 * Math.PI / 4), radius * Math.sin( 4 * Math.PI / 4),
            radius * Math.cos( 5 * Math.PI / 4), radius * Math.sin( 5 * Math.PI / 4),
            radius * Math.cos( 6 * Math.PI / 4), radius * Math.sin( 6 * Math.PI / 4),
            radius * Math.cos( 7 * Math.PI / 4), radius * Math.sin( 7 * Math.PI / 4),
            radius * Math.cos( 8 * Math.PI / 4), radius * Math.sin( 8 * Math.PI / 4)
        ];
        const colors = pushToArray(valueMax, []);
        for (let i = 0; i < points - 1; ++i) {
            pushToArray(valueMin, colors);
        }

        const geometry = new PIXI.Geometry()
            .addAttribute('aVertex', vertices, 2)
            .addAttribute('aColor', colors, 4);

        const quad = new PIXI.Mesh(geometry, this.material, null, PIXI.DRAW_MODES.TRIANGLE_FAN);
        quad.state.blend = false;
        quad.position.set(x, y);

        this.renderer.gl.colorMask(components.amlitude, components.velocity, components.damping, components.obstacle);
        this.renderer.render(quad, buffer, false);
        this.renderer.gl.colorMask(true, true, true, true);

        quad.destroy();
        geometry.destroy();
    }


    private readonly renderer: PIXI.Renderer;
    private readonly material: PIXI.MeshMaterial;
}