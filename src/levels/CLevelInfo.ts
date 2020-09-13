
import { ELevelProgress } from "./ELevelProgress"

export class CLevelInfo {
    constructor(name: string, progress: ELevelProgress) {
        this.name = name;
        this.progress = progress;
    }

    getName(): string {
        return this.name;
    }

    getProgress(): ELevelProgress {
        return this.progress;
    } 

    updateProgress(progress: ELevelProgress) {
        if (progress > this.progress) {
            this.progress = progress;
        }
    }

    private name: string;
    private progress: ELevelProgress
}