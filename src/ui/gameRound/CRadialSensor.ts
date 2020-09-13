/// <reference types="pixi.js" />

import { SensorInfo } from "../../levels/SensorInfo";
import { CWavesPhysics } from "../../physics/CWavesPhysics";
import { CAmplitudeAccessor } from "../../physics/CAmplitudeAccessor";

export class CRadialSensors {
    constructor(sensorInfo: SensorInfo) {
        this.sensorsInfo = sensorInfo;
        this.view = new PIXI.Graphics();

        this.redraw();
    }

    update(physics: CWavesPhysics) {
        const accessor = physics.makeAmplitudeAccessor(
            this.sensorsInfo.x - this.sensorsInfo.radius,
            this.sensorsInfo.y - this.sensorsInfo.radius,
            2 * this.sensorsInfo.radius,
            2 * this.sensorsInfo.radius);

        const prev = this.isActivated(); 
        this._isActivated = this.isActive(accessor);
        if (prev !== this.isActivated()) {
            this.redraw();
        }
    }

    isActivated(): boolean {
        return this._isActivated;
    }

    getView(): PIXI.Container {
        return this.view;
    }

    private isActive(accessor: CAmplitudeAccessor): boolean {
        const radius = this.sensorsInfo.radius;
        const width = 2 * radius;
        for (let y = 0; y < width; ++y) {
            for (let x = 0; x < width; ++x) {
                const dx = radius - x;
                const dy = radius - y;
                const inCircle = (dx * dx + dy * dy <= radius * radius);

                const value = accessor.getAmplitude(x, y);
                if (inCircle && value >= this.sensorsInfo.leftEdge && value <= this.sensorsInfo.rightEdge) {
                    return true;
                }
            }
        }
        return false;
    }

    private redraw(): void {
        this.view.clear();

        this.view.lineStyle(5, 0xffffff, this.isActivated() ? 0.9 : 0.4);
        this.view.drawCircle(this.sensorsInfo.x, this.sensorsInfo.y, this.sensorsInfo.radius);
    }

    private readonly sensorsInfo: SensorInfo
    private readonly view: PIXI.Graphics;

    private _isActivated: boolean;
}