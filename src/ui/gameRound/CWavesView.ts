/// <reference types="pixi.js" />

import * as VisualizationShader from '../../physics/shaders/VisualizationShader'
import { CWavesPhysics } from "../../physics/CWavesPhysics";

export class CWavesView {

    constructor(physics: CWavesPhysics) {
        this.physics = physics
        
        const buffer = physics.getActivateBuffer();
        const geometry = new PIXI.Geometry()
            .addAttribute('aVertexPosition', 
                [0, 0, 
                 buffer.width, 0, 
                 buffer.width, buffer.height,
                 0, buffer.height], 
                2) 
            .addAttribute('aUvs', 
                [0, 0, 
                 1, 0, 
                 1, 1,
                 0, 1], 
                2)
            .addIndex([0, 1, 2, 0, 2, 3]);

        const onscreenProgram = PIXI.Program.from(VisualizationShader.vertex, VisualizationShader.fragment);
        const onscreenMaterial = new PIXI.MeshMaterial(buffer, {
            program: onscreenProgram
        });
        this.view = new PIXI.Mesh(geometry, onscreenMaterial);
    }

    update(): void {
        this.view.material.texture = this.physics.getActivateBuffer();
    }

    getView(): PIXI.Container {
        return this.view;
    }

    private readonly physics: CWavesPhysics;
    private readonly view: PIXI.Mesh;
}