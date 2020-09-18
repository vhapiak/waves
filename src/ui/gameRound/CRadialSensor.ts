/// <reference types="pixi.js" />

import { SensorInfo } from "../../levels/SensorInfo";
import { CWavesPhysics } from "../../physics/CWavesPhysics";
import { CAmplitudeAccessor } from "../../physics/CAmplitudeAccessor";

export class CRadialSensors {
    constructor(sensorInfo: SensorInfo) {
        this.sensorInfo = sensorInfo;
        this.maxAmplitude = 0;

        this.percentage = new PIXI.Text('0%', {
            fill: '#ffffff',
            fontSize: 20
        });

        this.percentage.anchor.set(0.5, 0.5);

        const r = sensorInfo.radius;
        const markerRadius = 5;

        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(3, 0xffffff, 1.0);
        this.graphics.drawCircle(0, 0, r);

        this.graphics.lineStyle(1, 0x000000);
        this.graphics.beginFill(0xFF0000, 1.0);
        this.graphics.drawCircle(0, r - 2 * markerRadius , markerRadius);
        this.graphics.endFill();

        this.view = new PIXI.Container();
        this.view.addChild(this.graphics);
        this.view.addChild(this.percentage);
        this.view.position.set(sensorInfo.x, sensorInfo.y);

        this.updateVisualization();
    }

    update(physics: CWavesPhysics) {
        const accessor = physics.makeAmplitudeAccessor(
            this.sensorInfo.x - this.sensorInfo.radius,
            this.sensorInfo.y - this.sensorInfo.radius,
            2 * this.sensorInfo.radius,
            2 * this.sensorInfo.radius);

        this.updateMaxAmlitude(accessor);
        this.updateVisualization();
    }

    isActivated(): boolean {
        return this.maxAmplitude >= this.sensorInfo.threshold;
    }

    getView(): PIXI.Container {
        return this.view;
    }

    private updateMaxAmlitude(accessor: CAmplitudeAccessor): void {
        const radius = this.sensorInfo.radius;
        const width = 2 * radius;
        this.maxAmplitude = -Infinity;
        for (let y = 0; y < width; ++y) {
            for (let x = 0; x < width; ++x) {
                const dx = radius - x;
                const dy = radius - y;
                const inCircle = (dx * dx + dy * dy <= radius * radius);

                const value = accessor.getAmplitude(x, y);
                if (inCircle && value >= this.maxAmplitude) {
                    this.maxAmplitude = value;
                }
            }
        }
    }

    private updateVisualization(): void {
        this.view.alpha = this.isActivated() ? 0.9 : 0.4;

        let progress = (this.maxAmplitude < 0 ? 0 : this.maxAmplitude) / this.sensorInfo.threshold;
        if (progress > 1) {
            progress = 1;
        }
        this.percentage.text = Math.round(progress * 100) + '%';
    }

    private readonly sensorInfo: SensorInfo
    private readonly view: PIXI.Container;
    private readonly graphics: PIXI.Graphics;
    private readonly percentage: PIXI.Text;

    private maxAmplitude: number;
}