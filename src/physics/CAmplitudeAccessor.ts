
export class CAmplitudeAccessor {

    constructor(buffer: Float32Array, width: number, height: number) {
        this.buffer = buffer;
        this.width = width;
    }

    getAmplitude(x: number, y: number): number {
        const index = (y * this.width + x) * 4;
        return this.buffer[index];
    }

    private readonly buffer: Float32Array;
    private readonly width: number;
}