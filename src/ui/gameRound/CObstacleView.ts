/// <reference types="pixi.js" />

import { CWavesPhysics } from "../../physics/CWavesPhysics";
import { CAmplitudeAccessor } from "../../physics/CAmplitudeAccessor";
import { ObstacleInfo } from "../../levels/ObstacleInfo";

export class CObstacleView {
    constructor(obstacleInfo: ObstacleInfo) {
        this.view = new PIXI.Graphics();
        this.view.beginFill(0xFFFFFF, 1.0);
        this.view.drawRect(obstacleInfo.x, obstacleInfo.y, obstacleInfo.width, obstacleInfo.height);
        this.view.endFill();
    }

    getView(): PIXI.Container {
        return this.view;
    }

    private readonly view: PIXI.Graphics;
}