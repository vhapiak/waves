import { ESensorType } from "./ESensorType";

export type SensorInfo = {
    type: ESensorType
    x: number,
    y: number,
    radius: number,
    threshold: number
};