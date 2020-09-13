
import { ELevelProgress } from "./ELevelProgress"
import { SensorInfo } from "./SensorInfo"

export type LevelInfo = {
    name: string, 
    progress: ELevelProgress,
    targetNumberOfClicks: number,
    numberOfClicksDeviation: number,
    sensors: SensorInfo[]
};