/// <reference types="pixi.js" />

import * as VisualizationShader from '../../physics/shaders/VisualizationShader'
import { CWavesPhysics } from "../../physics/CWavesPhysics";

export class CGameRoundView {

    constructor(physics: CWavesPhysics) {
        this.physics = physics
        this.container = new PIXI.Container();
        
        const buffer = physics.getActivateBuffer();

        const quadGeometry = new PIXI.Geometry()
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
        this.waves = new PIXI.Mesh(quadGeometry, onscreenMaterial);

        this.container.addChild(this.waves);
    }

    update(): void {
        this.waves.material.texture = this.physics.getActivateBuffer();
    }

    getView(): PIXI.Container {
        return this.container;
    }

    private readonly physics: CWavesPhysics;
    private readonly container: PIXI.Container;
    private readonly waves: PIXI.Mesh;
}