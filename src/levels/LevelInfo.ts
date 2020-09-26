
import { ELevelProgress } from "./ELevelProgress"
import { SensorInfo } from "./SensorInfo"
import { ObstacleInfo } from "./ObstacleInfo";
import { EToolType } from "./EToolType";
import { HintInfo } from "./HintInfo";
import { EmiterInfo } from "./EmiterInfo";

export type LevelInfo = {
    name: string, 
    progress: ELevelProgress,
    availableTools: EToolType[]
    targetNumberOfClicks: number,
    iterationsInActiveState: number,
    sensors: SensorInfo[],
    obstacles: ObstacleInfo[],
    emiters: EmiterInfo[],
    hints: HintInfo[],
};