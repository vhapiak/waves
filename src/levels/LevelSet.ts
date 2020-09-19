import { LevelsSetInfo } from "./LevelsSetInfo";
import { ELevelProgress } from "./ELevelProgress";
import { ESensorType } from "./ESensorType";
import { EToolType } from "./EToolType";

export const levelSet: LevelsSetInfo = {
    levels: [
        {
            name: "Level 1",
            progress: ELevelProgress.NotPlayed,
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 1,
            iterationsInActiveState: 90,
            sensors: [
                {
                    type: ESensorType.Positive,
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
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 1,
            iterationsInActiveState: 90,
            sensors: [
                {
                    type: ESensorType.Positive,
                    x: 300,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
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
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 1,
            iterationsInActiveState: 60,
            sensors: [
                {
                    type: ESensorType.Positive,
                    x: 300,
                    y: 100,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 300,
                    y: 500,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 500,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 400,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: [
                {
                    x: 230,
                    y: 250,
                    width: 20,
                    height: 100
                }
            ]
        },
        {
            name: "Level 4",
            progress: ELevelProgress.NotPlayed,
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 2,
            iterationsInActiveState: 10,
            sensors: [
                {
                    type: ESensorType.Positive,
                    x: 400,
                    y: 300,
                    radius: 30,
                    threshold: 0.08
                },
                {
                    type: ESensorType.Positive,
                    x: 200,
                    y: 200,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 600,
                    y: 400,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: []
        },
        {
            name: "Level 5",
            progress: ELevelProgress.NotPlayed,
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 1,
            iterationsInActiveState: 60,
            sensors: [
                {
                    type: ESensorType.NoWave,
                    x: 400,
                    y: 200,
                    radius: 30,
                    threshold: 0.005
                },
                {
                    type: ESensorType.Positive,
                    x: 300,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 500,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: []
        },
        {
            name: "Level 6",
            progress: ELevelProgress.NotPlayed,
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 2,
            iterationsInActiveState: 60,
            sensors: [
                {
                    type: ESensorType.Positive,
                    x: 400,
                    y: 200,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 400,
                    y: 100,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 550,
                    y: 499,
                    radius: 30,
                    threshold: 0.01
                },
            ],
            obstacles: [
                {
                    x: 480,
                    y: 200,
                    width: 20,
                    height: 200
                },
                {
                    x: 300,
                    y: 200,
                    width: 20,
                    height: 200
                }
            ]
        },
        {
            name: "Level 7",
            progress: ELevelProgress.NotPlayed,
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 1,
            iterationsInActiveState: 10,
            sensors: [
                {
                    type: ESensorType.Positive,
                    x: 400,
                    y: 300,
                    radius: 30,
                    threshold: 0.03
                },
                {
                    type: ESensorType.Positive,
                    x: 550,
                    y: 500,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 250,
                    y: 500,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 225,
                    y: 150,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 575,
                    y: 150,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: [
                {
                    x: 280,
                    y: 200,
                    width: 20,
                    height: 200
                },
                {
                    x: 500,
                    y: 200,
                    width: 20,
                    height: 200
                }
            ]
        },
        {
            name: "Level 8",
            progress: ELevelProgress.NotPlayed,
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 3,
            iterationsInActiveState: 60,
            sensors: [
                {
                    type: ESensorType.NoWave,
                    x: 400,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 250,
                    y: 150,
                    radius: 30,
                    threshold: 0.03
                },
                {
                    type: ESensorType.Positive,
                    x: 550,
                    y: 450,
                    radius: 30,
                    threshold: 0.03
                },
                {
                    type: ESensorType.Positive,
                    x: 550,
                    y: 150,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 250,
                    y: 450,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: []
        }
    ]
};