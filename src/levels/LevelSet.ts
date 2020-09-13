import { LevelsSetInfo } from "./LevelsSetInfo";
import { ELevelProgress } from "./ELevelProgress";

export const levelSet: LevelsSetInfo = {
    levels: [
        {
            name: "Level 2",
            progress: ELevelProgress.NotPlayed,
            targetNumberOfClicks: 1,
            numberOfClicksDeviation: 0,
            sensors: [
                {
                    x: 300,
                    y: 300,
                    radius: 30,
                    leftEdge: 0.01,
                    rightEdge: 1.0
                },
                {
                    x: 500,
                    y: 300,
                    radius: 30,
                    leftEdge: 0.01,
                    rightEdge: 1.0
                }
            ]
        },
        {
            name: "Level 1",
            progress: ELevelProgress.NotPlayed,
            targetNumberOfClicks: 1,
            numberOfClicksDeviation: 0,
            sensors: [
                {
                    x: 400,
                    y: 300,
                    radius: 30,
                    leftEdge: 0.01,
                    rightEdge: 1.0
                }
            ]
        }
    ]
};