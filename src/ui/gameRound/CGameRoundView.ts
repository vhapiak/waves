/// <reference types="pixi.js" />

import { CWavesPhysics } from "../../physics/CWavesPhysics";
import { CWavesView } from "./CWavesView";
import { LevelInfo } from "../../levels/LevelInfo";
import { CRadialSensors } from "./CRadialSensor";
import { CObstacleView } from "./CObstacleView";
import { ELevelProgress } from "../../levels/ELevelProgress";
import { CTimerView } from "./CTimerView";

export class CGameRoundView {

    constructor(physics: CWavesPhysics) {
        this.physics = physics
        this.container = new PIXI.Container();

        this.wavesView = new CWavesView(physics);
        this.sensors = [];
        this.obstacles = [];
        this.nextSensorToProcess = 0;
        this.numberOfClicks = 0;
        this.activationTimepoint = 0;

        this.timerView = new CTimerView();
        this.timerView.getView().position.set(390, 35);

        this.container.addChild(this.wavesView.getView());
        this.container.addChild(this.timerView.getView());

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

        this.timerView.setExpectedTime(level.iterationsInActiveState);
    }

    update(): void {
        this.physics.iterate();
        
        // we are updating one sensor per cycle to increase fps
        if (this.nextSensorToProcess < this.sensors.length) {
            this.sensors[this.nextSensorToProcess].update(this.physics);
            this.nextSensorToProcess = (this.nextSensorToProcess + 1) % this.sensors.length;
        }
        
        if (this.isAllSensorsActive()) {
            if (this.activationTimepoint === 0) {
                this.activationTimepoint = this.physics.getIterationNumber();
            }
        } else if (this.activationTimepoint > 0) {
            this.activationTimepoint = 0;
        }

        this.timerView.update(this.getActiveTime());
        this.wavesView.update();
    }

    isRoundEnded(): boolean {
        return this.isSensorsActiveLongEnough();
    }

    getProgress(): ELevelProgress {
        let progress = ELevelProgress.Played;
        if (this.numberOfClicks <= this.levelInfo.targetNumberOfClicks) {
            progress += 1;
        }
        if (this.isSensorsActiveLongEnough()) {
            progress += 1;
        }
        return progress;
    }

    getView(): PIXI.Container {
        return this.container;
    }

    private reset(): void {
        this.physics.reset();
        this.timerView.update(0);

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
        this.activationTimepoint = 0;
    }

    private isAllSensorsActive(): boolean {
        for (let sensor of this.sensors) {
            if (!sensor.isActivated()) {
                return false;
            }
        }
        return true;
    }

    private getActiveTime(): number {
        if (this.activationTimepoint === 0) {
            return 0;
        }
        return this.physics.getIterationNumber() - this.activationTimepoint;
    }

    private isSensorsActiveLongEnough(): boolean {
        return this.getActiveTime() >= this.levelInfo.iterationsInActiveState;
    }

    private readonly physics: CWavesPhysics;
    private readonly container: PIXI.Container;
    private readonly wavesView: CWavesView;
    private readonly timerView: CTimerView;

    private levelInfo: LevelInfo;
    private sensors: CRadialSensors[]
    private obstacles: CObstacleView[]
    private nextSensorToProcess: number;
    private numberOfClicks: number;
    private activationTimepoint: number;
}