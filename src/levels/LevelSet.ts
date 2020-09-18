import { LevelsSetInfo } from "./LevelsSetInfo";
import { ELevelProgress } from "./ELevelProgress";

export const levelSet: LevelsSetInfo = {
    levels: [
        {
            name: "Level 1",
            progress: ELevelProgress.NotPlayed,
            targetNumberOfClicks: 1,
            iterationsInActiveState: 90,
            sensors: [
                {
                    x: 400,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: []
        },
        {
            name: "Level 2",
            progress: ELevelProgress.NotPlayed,
            targetNumberOfClicks: 1,
            iterationsInActiveState: 90,
            sensors: [
                {
                    x: 300,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    x: 500,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: []
        },
        {
            name: "Level 3",
            progress: ELevelProgress.NotPlayed,
            targetNumberOfClicks: 1,
            iterationsInActiveState: 60,
            sensors: [
                {
                    x: 400,
                    y: 100,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    x: 400,
                    y: 500,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    x: 600,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    x: 500,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: [
                {
                    x: 330,
                    y: 250,
                    width: 20,
                    height: 100
                }
            ]
        }
    ]
};