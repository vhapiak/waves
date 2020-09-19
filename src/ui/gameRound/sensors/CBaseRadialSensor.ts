/// <reference types="pixi.js" />

import { SensorInfo } from "../../../levels/SensorInfo";
import { CWavesPhysics } from "../../../physics/CWavesPhysics";
import { CAmplitudeAccessor } from "../../../physics/CAmplitudeAccessor";

export abstract class CBaseRadialSensor {
    constructor(sensorInfo: SensorInfo, markerColor: number, numberOfMarkers: number) {
        this.sensorInfo = sensorInfo;
        this.activationPercentage = 0;

        this.percentage = new PIXI.Text('0%', {
            fill: '#ffffff',
            fontSize: 20
        });
        this.percentage.anchor.set(0.5, 0.5);

        const r = sensorInfo.radius;
        const markerRadius = 5;
        const smallR = r - 2 * markerRadius;
        const markerOffset = Math.PI / 2 + (numberOfMarkers - 1) * Math.PI / 9;
        const markerStep  = 2 * Math.PI / 9; 

        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(3, 0xffffff, 1.0);
        this.graphics.drawCircle(0, 0, r);

        for (let i = 0, a = markerOffset; i < numberOfMarkers; ++i, a -= markerStep) {
            this.graphics.lineStyle(1, 0x000000);
            this.graphics.beginFill(markerColor, 1.0);
            this.graphics.drawCircle(smallR * Math.cos(a), smallR * Math.sin(a), markerRadius);
            this.graphics.endFill();
        }

        this.view = new PIXI.Container();
        this.view.addChild(this.graphics);
        this.view.addChild(this.percentage);
        this.view.position.set(sensorInfo.x, sensorInfo.y);
    }

    protected abstract caclActivationPercentage(accessor: CAmplitudeAccessor): number;

    update(physics: CWavesPhysics): void {
        const accessor = physics.makeAmplitudeAccessor(
            this.sensorInfo.x - this.sensorInfo.radius,
            this.sensorInfo.y - this.sensorInfo.radius,
            2 * this.sensorInfo.radius,
            2 * this.sensorInfo.radius);

        this.activationPercentage = this.caclActivationPercentage(accessor);
        this.updateVisualization();
    }

    isActivated(): boolean {
        return this.activationPercentage >= 1.0;
    }

    getView(): PIXI.Container {
        return this.view;
    }

    private updateVisualization(): void {
        this.view.alpha = this.isActivated() ? 1.0 : 0.4;

        this.percentage.text = Math.round(this.activationPercentage * 100) + '%';
    }

    protected readonly sensorInfo: SensorInfo;

    private readonly view: PIXI.Container;
    private readonly graphics: PIXI.Graphics;
    private readonly percentage: PIXI.Text;

    private activationPercentage: number;
}