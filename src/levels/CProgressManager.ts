import { LevelsSetInfo } from "./LevelsSetInfo";
import { levelSet } from "./LevelSet";

export class CProgressManager {

    private static readonly storageKey = 'progress';

    constructor(levelsSet: LevelsSetInfo) {
        this.levelsSet = levelSet;
    }

    save(): void {
        const progress = [];
        for (let level of this.levelsSet.levels) {
            progress.push(level.progress);
        }
        localStorage.setItem(CProgressManager.storageKey, JSON.stringify(progress));
    }

    load(): void {
        const json = localStorage.getItem(CProgressManager.storageKey);
        const progress = JSON.parse(json);
        if (progress instanceof Array) {
            for (let i = 0; i < progress.length; ++i) {
                this.levelsSet.levels[i].progress = progress[i]; 
            }
        } else {
            this.save();
            return;
        }

    }

    private readonly levelsSet: LevelsSetInfo;

}