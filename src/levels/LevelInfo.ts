
import { ELevelProgress } from "./ELevelProgress"
import { SensorInfo } from "./SensorInfo"
import { ObstacleInfo } from "./ObstacleInfo";
import { EToolType } from "./EToolType";
import { HintInfo } from "./HintInfo";

export type LevelInfo = {
    name: string, 
    progress: ELevelProgress,
    availableTools: EToolType[]
    targetNumberOfClicks: number,
    iterationsInActiveState: number,
    sensors: SensorInfo[],
    obstacles: ObstacleInfo[],
    hints: HintInfo[],
};