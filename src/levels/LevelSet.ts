import { CLevelsSetInfo } from "./CLevelsSetInfo";
import { CLevelInfo } from "./CLevelInfo";
import { ELevelProgress } from "./ELevelProgress";

export const levelSet = new CLevelsSetInfo([
    new CLevelInfo("Level 1", ELevelProgress.Done),
    new CLevelInfo("Level 2", ELevelProgress.PerfectlyDone),
    new CLevelInfo("Level 3", ELevelProgress.NotPlayed),
    new CLevelInfo("Level 4", ELevelProgress.Played),
    new CLevelInfo("Level 5", ELevelProgress.Done),
    new CLevelInfo("Level 6", ELevelProgress.Done),
    new CLevelInfo("Level 7", ELevelProgress.Done),
    new CLevelInfo("Level 8", ELevelProgress.Done),
    new CLevelInfo("Level 9", ELevelProgress.Done),
    new CLevelInfo("Level 10", ELevelProgress.Done),
]);