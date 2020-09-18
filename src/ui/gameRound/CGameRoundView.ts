/// <reference types="pixi.js" />

import { CWavesPhysics } from "../../physics/CWavesPhysics";
import { CWavesView } from "./CWavesView";
import { LevelInfo } from "../../levels/LevelInfo";
import { CRadialSensors } from "./CRadialSensor";
import { CObstacleView } from "./CObstacleView";
import { ELevelProgress } from "../../levels/ELevelProgress";

export class CGameRoundView {

    constructor(physics: CWavesPhysics) {
        this.physics = physics
        this.container = new PIXI.Container();

        this.wavesView = new CWavesView(physics);
        this.sensors = [];
        this.obstacles = [];
        this.nextSensorToProcess = 0;
        this.numberOfClicks = 0;

        this.container.addChild(this.wavesView.getView());

        this.container.interactive = true;
        this.container.on('pointerup', function(event: PIXI.InteractionEvent) {
            this.physics.emitCircleWave(event.data.global.x, event.data.global.y, 6.0, 1.0);
            this.numberOfClicks++;
        }, this);
    }

    loadLevel(level: LevelInfo) {
        this.reset();

        this.levelInfo = level;
        for (let sensorInfo of level.sensors) {
            const sensor = new CRadialSensors(sensorInfo)
            this.sensors.push(sensor);
            this.container.addChild(sensor.getView());
        }

        for (let obstacleInfo of level.obstacles) {
            this.physics.putRectangleObstacle(
                obstacleInfo.x,
                obstacleInfo.y,
                obstacleInfo.width,
                obstacleInfo.height
            );
            const obstacle = new CObstacleView(obstacleInfo);
            this.obstacles.push(obstacle);
            this.container.addChild(obstacle.getView());
        }
    }

    update(): void {
        this.physics.iterate();
        
        // we are updating one sensor per cycle to increase fps
        if (this.nextSensorToProcess < this.sensors.length) {
            this.sensors[this.nextSensorToProcess].update(this.physics);
            this.nextSensorToProcess = (this.nextSensorToProcess + 1) % this.sensors.length;
        }

        this.wavesView.update();
    }

    isRoundEnded(): boolean {
        for (let sensor of this.sensors) {
            if (!sensor.isActivated()) {
                return false;
            }
        }
        return true;
    }

    getProgress(): ELevelProgress {
        if (this.numberOfClicks <= this.levelInfo.targetNumberOfClicks) {
            return ELevelProgress.PerfectlyDone;
        }
        if (this.numberOfClicks <= this.levelInfo.targetNumberOfClicks + this.levelInfo.numberOfClicksDeviation) {
            return ELevelProgress.Done;
        }
        return ELevelProgress.Played;
    }

    getView(): PIXI.Container {
        return this.container;
    }

    private reset(): void {
        this.physics.reset();

        for(let sensor of this.sensors) {
            this.container.removeChild(sensor.getView());
        }

        for(let obstacle of this.obstacles) {
            this.container.removeChild(obstacle.getView());
        }

        this.sensors = [];
        this.obstacles = [];
        this.nextSensorToProcess = 0;
        this.numberOfClicks = 0;
    }

    private readonly physics: CWavesPhysics;
    private readonly container: PIXI.Container;
    private readonly wavesView: CWavesView;

    private levelInfo: LevelInfo;
    private sensors: CRadialSensors[]
    private obstacles: CObstacleView[]
    private nextSensorToProcess: number;
    private numberOfClicks: number;
}