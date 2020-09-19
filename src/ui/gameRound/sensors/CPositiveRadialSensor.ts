import { CBaseRadialSensor } from "./CBaseRadialSensor";
import { SensorInfo } from "../../../levels/SensorInfo";
import { CAmplitudeAccessor } from "../../../physics/CAmplitudeAccessor";

export class CPositiveRadialSensor extends CBaseRadialSensor {

    constructor(sensorInfo: SensorInfo) {
        super(sensorInfo, 0xFF0000, sensorInfo.threshold > 0.02 ? 2 : 1);
    }

    protected caclActivationPercentage(accessor: CAmplitudeAccessor): number {
        const radius = this.sensorInfo.radius;
        const width = 2 * radius;
        let closerAmplitude = -Infinity;
        for (let y = 0; y < width; ++y) {
            for (let x = 0; x < width; ++x) {
                const dx = radius - x;
                const dy = radius - y;
                const inCircle = (dx * dx + dy * dy <= radius * radius);

                const value = accessor.getAmplitude(x, y);
                if (inCircle && value >= this.sensorInfo.threshold) {
                    return 1.0;
                } else if (inCircle && value > closerAmplitude) {
                    closerAmplitude = value;
                }
            }
        }
        if (closerAmplitude < 0.0) {
            closerAmplitude = 0.0;
        }
        return closerAmplitude / this.sensorInfo.threshold;
    }

}