
export type BufferValue = {
    amlitude: number,
    velocity: number,
    damping: number,
    obstacle: boolean
};

export function makeUniform(value: BufferValue): any {
    return {
        x: value.amlitude,
        y: value.velocity,
        width: value.damping,
        height: value.obstacle ? 0.0 : 1.0
    }
}

export function pushToArray(value: BufferValue, array: number[]): number[] {
    array.push(
        value.amlitude,
        value.velocity,
        value.damping,
        value.obstacle ? 0.0 : 1.0);
    return array;
}