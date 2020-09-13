
/// <re

import { CLevelInfo } from "./CLevelInfo"

export class CLevelsSetInfo {

    constructor(levels: CLevelInfo[]) {
        this.levels = levels;
    }

    getLevels(): CLevelInfo[] {
        return this.levels;
    }

    private levels: CLevelInfo[];
}