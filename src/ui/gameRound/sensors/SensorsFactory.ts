import { SensorInfo } from "../../../levels/SensorInfo";
import { CBaseRadialSensor } from "./CBaseRadialSensor";
import { ESensorType } from "../../../levels/ESensorType";
import { CPositiveRadialSensor } from "./CPositiveRadialSensor";
import { CNoWavesRadialSensor } from "./CNoWavesRadialSensor";

export function makeSensor(sensorInfo: SensorInfo): CBaseRadialSensor {
    switch(sensorInfo.type) {
        case ESensorType.Positive:
            return new CPositiveRadialSensor(sensorInfo);
        case ESensorType.NoWave:
            return new CNoWavesRadialSensor(sensorInfo);
    }
    throw new Error('Sensor type not implemented');
}