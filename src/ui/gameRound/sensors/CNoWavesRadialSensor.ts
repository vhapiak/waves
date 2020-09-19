import { CBaseRadialSensor } from "./CBaseRadialSensor";
import { SensorInfo } from "../../../levels/SensorInfo";
import { CAmplitudeAccessor } from "../../../physics/CAmplitudeAccessor";

export class CNoWavesRadialSensor extends CBaseRadialSensor {

    constructor(sensorInfo: SensorInfo) {
        super(sensorInfo, 0x999999, 1);
    }

    protected caclActivationPercentage(accessor: CAmplitudeAccessor): number {
        const radius = this.sensorInfo.radius;
        const width = 2 * radius;

        let hasOverflow = false;
        let biggestAmplitude = this.sensorInfo.threshold;
        for (let y = 0; y < width; ++y) {
            for (let x = 0; x < width; ++x) {
                const dx = radius - x;
                const dy = radius - y;
                const inCircle = (dx * dx + dy * dy <= radius * radius);

                const value = accessor.getAmplitude(x, y);
                const absValue = Math.abs(value);
                if (inCircle && absValue >= biggestAmplitude) {
                    biggestAmplitude = absValue;
                }
            }
        }
        if (biggestAmplitude > 1.0) {
            biggestAmplitude = 1.0;
        }
        return (1 - biggestAmplitude) / (1.0 - this.sensorInfo.threshold);
    }

}