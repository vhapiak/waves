/// <reference types="pixi.js" />

import { CWavesPhysics } from "../../physics/CWavesPhysics";
import { CWavesView } from "./CWavesView";
import { LevelInfo } from "../../levels/LevelInfo";
import { CObstacleView } from "./CObstacleView";
import { ELevelProgress } from "../../levels/ELevelProgress";
import { CTimerView } from "./CTimerView";
import { makeSensor } from "./sensors/SensorsFactory";
import { CBaseRadialSensor } from "./sensors/CBaseRadialSensor";
import { CToolsSelectionView } from "./CToolsSelectionView";
import { EToolType } from "../../levels/EToolType";

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

        this.toolSelectionView = new CToolsSelectionView();
        this.toolSelectionView.getView().position.set(390, 565);

        this.container.addChild(this.wavesView.getView());
        this.container.addChild(this.timerView.getView());
        this.container.addChild(this.toolSelectionView.getView());

        this.container.interactive = true;
        this.container.on('pointerup', CGameRoundView.prototype.onClick, this);
    }

    loadLevel(level: LevelInfo) {
        this.reset();

        this.levelInfo = level;
        for (let sensorInfo of level.sensors) {
            const sensor = makeSensor(sensorInfo);
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

        this.toolSelectionView.setAvailableTools(level.availableTools);
        this.toolSelectionView.getView().visible = level.availableTools.length >= 2;
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

    private onClick(event: PIXI.InteractionEvent): void {
        const type = this.toolSelectionView.getSelectedTool();
        const value = (type === EToolType.PositiveWave ? 1.0 : -1.0);

        const x = event.data.global.x;
        const y = event.data.global.y;

        for (let sensorInfo of this.levelInfo.sensors) {
            const dx = sensorInfo.x - x;
            const dy = sensorInfo.y - y;
            if (dx * dx + dy * dy <= sensorInfo.radius * sensorInfo.radius) {
                return;
            }
        }

        this.physics.emitCircleWave(x, y, 6.0, value);
        this.numberOfClicks++;
    }

    private readonly physics: CWavesPhysics;
    private readonly container: PIXI.Container;
    private readonly wavesView: CWavesView;
    private readonly timerView: CTimerView;
    private readonly toolSelectionView: CToolsSelectionView;

    private levelInfo: LevelInfo;
    private sensors: CBaseRadialSensor[]
    private obstacles: CObstacleView[]
    private nextSensorToProcess: number;
    private numberOfClicks: number;
    private activationTimepoint: number;
}