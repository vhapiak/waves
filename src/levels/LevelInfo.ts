
import { ELevelProgress } from "./ELevelProgress"
import { SensorInfo } from "./SensorInfo"
import { ObstacleInfo } from "./ObstacleInfo";

export type LevelInfo = {
    name: string, 
    progress: ELevelProgress,
    targetNumberOfClicks: number,
    numberOfClicksDeviation: number,
    sensors: SensorInfo[],
    obstacles: ObstacleInfo[],
};