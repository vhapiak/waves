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
            obstacles: [],
            emiters: [],
            hints: [
                {
                    description: "Click here to emit wave!",
                    x: 500,
                    y: 450,
                    align: 'left',
                    anchor: {
                        x: 0.0,
                        y: 0.5
                    },
                    pointTo: {
                        x: 475,
                        y: 425
                    }
                },
                {
                    description: "Sensor activates\nwhen it detects a wave",
                    x: 355,
                    y: 370,
                    align: 'right',
                    anchor: {
                        x: 1.0,
                        y: 0.5
                    },
                    pointTo: {
                        x: 400,
                        y: 340
                    }
                },
                {
                    description: "Activate sensor to run\ntimer and to finish level",
                    x: 355,
                    y: 100,
                    align: 'right',
                    anchor: {
                        x: 1.0,
                        y: 0.5
                    },
                    pointTo: {
                        x: 400,
                        y: 60
                    }
                }
            ],
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
                    x: 230,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                },
                {
                    type: ESensorType.Positive,
                    x: 570,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: [],
            emiters: [],
            hints: [
                {
                    description: "Activate all sensors to run timer.\nUse as few waves as possible!",
                    x: 400,
                    y: 380,
                    align: 'center',
                    anchor: {
                        x: 0.5,
                        y: 0.5
                    }
                }
            ],
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
            ],
            emiters: [],
            hints: [
                {
                    description: "Waves will reflect from obstacles",
                    x: 260,
                    y: 385,
                    align: 'left',
                    anchor: {
                        x: 0.0,
                        y: 0.5
                    },
                    pointTo: {
                        x: 240,
                        y: 360
                    }
                }
            ],
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
            obstacles: [],
            emiters: [],
            hints: [
                {
                    description: "Some sensors are less sensitive.\nWave must be more powerfull.",
                    x: 375,
                    y: 375,
                    align: 'right',
                    anchor: {
                        x: 1.0,
                        y: 0.5
                    },
                    pointTo: {
                        x: 400,
                        y: 340
                    }
                }
            ],
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
                    y: 400,
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
            obstacles: [],
            emiters: [],
            hints: [
                {
                    description: "This is an inverted sensor.\nWaves deactivate it.",
                    x: 375,
                    y: 475,
                    align: 'right',
                    anchor: {
                        x: 1.0,
                        y: 0.5
                    },
                    pointTo: {
                        x: 400,
                        y: 440
                    }
                }
            ],
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
            ],
            emiters: [],
            hints: [],
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
            ],
            emiters: [],
            hints: [],
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
            obstacles: [],
            emiters: [],
            hints: [],
        },
        {
            name: "Level 9",
            progress: ELevelProgress.NotPlayed,
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 1,
            iterationsInActiveState: 60,
            sensors: [
                {
                    type: ESensorType.Positive,
                    x: 600,
                    y: 150,
                    radius: 30,
                    threshold: 0.05
                },
                {
                    type: ESensorType.Positive,
                    x: 600,
                    y: 450,
                    radius: 30,
                    threshold: 0.05
                }
            ],
            obstacles: [],
            emiters: [
                {
                    x: 300,
                    y: 300,
                    radius: 6,
                    visualRadius: 20,
                    amlitude: 1.0,
                    period: 240,
                    enabled: true,
                    enableable: false
                }
            ],
            hints: [
                {
                    description: "This is a waves emitter.\nIt works with constant frequency.",
                    x: 350,
                    y: 360,
                    align: 'left',
                    anchor: {
                        x: 0.0,
                        y: 0.5
                    },
                    pointTo: {
                        x: 300,
                        y: 330
                    }
                }
            ],
        },
        {
            name: "Level 10",
            progress: ELevelProgress.NotPlayed,
            availableTools: [EToolType.PositiveWave],
            targetNumberOfClicks: 1,
            iterationsInActiveState: 420,
            sensors: [
                {
                    type: ESensorType.Positive,
                    x: 400,
                    y: 300,
                    radius: 30,
                    threshold: 0.01
                }
            ],
            obstacles: [],
            emiters: [
                {
                    x: 600,
                    y: 300,
                    radius: 6,
                    visualRadius: 20,
                    amlitude: 1.0,
                    period: 250,
                    enabled: true,
                    enableable: false
                },
                {
                    x: 200,
                    y: 300,
                    radius: 6,
                    visualRadius: 20,
                    amlitude: 1.0,
                    period: 250,
                    enabled: false,
                    enableable: true
                }
            ],
            hints: [
                {
                    description: "You can toggle green emitters",
                    x: 250,
                    y: 360,
                    align: 'left',
                    anchor: {
                        x: 0.0,
                        y: 0.5
                    },
                    pointTo: {
                        x: 200,
                        y: 330
                    }
                }
            ],
        }
    ]
};