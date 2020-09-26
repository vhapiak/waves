/// <reference types="pixi.js" />

import { EmiterInfo } from "../../levels/EmiterInfo";
import { CWavesPhysics } from "../../physics/CWavesPhysics";

export class CRadialEmiter {
    constructor(emiterInfo: EmiterInfo, physics: CWavesPhysics) {
        this.emiterInfo = emiterInfo;
        this.physics = physics;
        this.activationIteration = physics.getIterationNumber();
        this.enabled = emiterInfo.enabled;

        const graphics = new PIXI.Graphics();
        graphics.lineStyle(3, this.emiterInfo.enableable ? 0x00FF00 : 0xFF0000, 1.0);
        graphics.beginFill(0x777777);
        graphics.drawCircle(0, 0, emiterInfo.visualRadius);
        graphics.endFill();

        this.view = new PIXI.Container();
        this.view.addChild(graphics);
        this.view.position.set(emiterInfo.x, emiterInfo.y);

        if (this.emiterInfo.enableable) {
            this.view.interactive = true;
            this.view.buttonMode = true;
        }

        this.updateVisualization();
    }

    update(): void {
        const dt = this.physics.getIterationNumber() - this.activationIteration;
        if (this.enabled && dt % this.emiterInfo.period === 0) {
            this.physics.emitCircleWave(
                this.emiterInfo.x, 
                this.emiterInfo.y, 
                this.emiterInfo.radius, 
                this.emiterInfo.amlitude);
        }
    }

    testHit(x: number, y: number): boolean {
        const dx = this.emiterInfo.x - x;
        const dy = this.emiterInfo.y - y;
        return dx * dx + dy * dy <= this.emiterInfo.visualRadius * this.emiterInfo.visualRadius;
    }

    toggle(): void {
        if (this.emiterInfo.enableable) {
            this.enabled = !this.enabled;
            this.activationIteration = this.physics.getIterationNumber();
            this.updateVisualization();
        }
    }

    getView(): PIXI.Container {
        return this.view;
    }

    private updateVisualization() {
        this.view.alpha = this.enabled ? 1.0 : 0.4;
    }

    protected readonly emiterInfo: EmiterInfo;
    protected readonly physics: CWavesPhysics;

    private readonly view: PIXI.Container;
    private readonly graphics: PIXI.Graphics;

    private activationIteration: number;
    private enabled: boolean;
}