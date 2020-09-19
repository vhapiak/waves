import { SensorInfo } from "../../../levels/SensorInfo";
import { CBaseRadialSensor } from "./CBaseRadialSensor";
import { ESensorType } from "../../../levels/ESensorType";
import { CPositiveRadialSensor } from "./CPositiveRadialSensor";
import { CNoWavesRadialSensor } from "./CNoWavesRadialSensor";
import { CNegativeRadialSensor } from "./CNegativeRadialSensor";

export function makeSensor(sensorInfo: SensorInfo): CBaseRadialSensor {
    switch(sensorInfo.type) {
        case ESensorType.Positive:
            return new CPositiveRadialSensor(sensorInfo);
        case ESensorType.NoWave:
            return new CNoWavesRadialSensor(sensorInfo);
        case ESensorType.Negative:
            return new CNegativeRadialSensor(sensorInfo);
    }
    throw new Error('Sensor type not implemented');
}