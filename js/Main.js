define("levels/ELevelProgress", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ELevelProgress = void 0;
    var ELevelProgress;
    (function (ELevelProgress) {
        ELevelProgress[ELevelProgress["NotPlayed"] = 0] = "NotPlayed";
        ELevelProgress[ELevelProgress["Played"] = 1] = "Played";
        ELevelProgress[ELevelProgress["Done"] = 2] = "Done";
        ELevelProgress[ELevelProgress["PerfectlyDone"] = 3] = "PerfectlyDone";
    })(ELevelProgress = exports.ELevelProgress || (exports.ELevelProgress = {}));
});
define("levels/ESensorType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ESensorType = void 0;
    var ESensorType;
    (function (ESensorType) {
        ESensorType[ESensorType["Positive"] = 0] = "Positive";
        ESensorType[ESensorType["Negative"] = 1] = "Negative";
        ESensorType[ESensorType["NoWave"] = 2] = "NoWave";
    })(ESensorType = exports.ESensorType || (exports.ESensorType = {}));
});
define("levels/SensorInfo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("levels/ObstacleInfo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("levels/EToolType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EToolType = void 0;
    var EToolType;
    (function (EToolType) {
        EToolType[EToolType["PositiveWave"] = 0] = "PositiveWave";
        EToolType[EToolType["NegativeWave"] = 1] = "NegativeWave";
    })(EToolType = exports.EToolType || (exports.EToolType = {}));
});
define("levels/HintInfo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("levels/EmiterInfo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("levels/LevelInfo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("levels/LevelsSetInfo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("levels/LevelSet", ["require", "exports", "levels/ELevelProgress", "levels/ESensorType", "levels/EToolType"], function (require, exports, ELevelProgress_1, ESensorType_1, EToolType_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.levelSet = void 0;
    exports.levelSet = {
        levels: [
            {
                name: "Level 1",
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 1,
                iterationsInActiveState: 90,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 1,
                iterationsInActiveState: 90,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 230,
                        y: 300,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 1,
                iterationsInActiveState: 60,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 300,
                        y: 100,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 300,
                        y: 500,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 500,
                        y: 300,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 2,
                iterationsInActiveState: 10,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 400,
                        y: 300,
                        radius: 30,
                        threshold: 0.08
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 200,
                        y: 200,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 1,
                iterationsInActiveState: 60,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.NoWave,
                        x: 400,
                        y: 400,
                        radius: 30,
                        threshold: 0.005
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 300,
                        y: 300,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 2,
                iterationsInActiveState: 60,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 400,
                        y: 200,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 400,
                        y: 100,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 1,
                iterationsInActiveState: 10,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 400,
                        y: 300,
                        radius: 30,
                        threshold: 0.03
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 550,
                        y: 500,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 250,
                        y: 500,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 225,
                        y: 150,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 3,
                iterationsInActiveState: 60,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.NoWave,
                        x: 400,
                        y: 300,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 250,
                        y: 150,
                        radius: 30,
                        threshold: 0.03
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 550,
                        y: 450,
                        radius: 30,
                        threshold: 0.03
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 550,
                        y: 150,
                        radius: 30,
                        threshold: 0.01
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 1,
                iterationsInActiveState: 60,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.Positive,
                        x: 600,
                        y: 150,
                        radius: 30,
                        threshold: 0.05
                    },
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
                progress: ELevelProgress_1.ELevelProgress.NotPlayed,
                availableTools: [EToolType_1.EToolType.PositiveWave],
                targetNumberOfClicks: 1,
                iterationsInActiveState: 420,
                sensors: [
                    {
                        type: ESensorType_1.ESensorType.Positive,
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
});
/// <reference types="pixi.js" />
define("ui/levelSelection/CLevelItem", ["require", "exports", "levels/ELevelProgress"], function (require, exports, ELevelProgress_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CLevelItem = void 0;
    class CLevelItem {
        constructor(levelInfo, index, listener) {
            this.levelInfo = levelInfo;
            this.index = index;
            this.listener = listener;
            this.container = new PIXI.Container();
            this.progressViews = [];
            this.container.interactive = true;
            this.container.buttonMode = true; // hand cursor
            this.container.on('pointerup', CLevelItem.prototype.onSelection, this);
            const textures = ['data/img/progress1.png', 'data/img/progress2.png', 'data/img/progress3.png'];
            for (let i = 0; i < textures.length; ++i) {
                const view = new PIXI.Sprite(PIXI.Texture.from(textures[i]));
                view.anchor.set(0.5);
                this.container.addChild(view);
                this.progressViews.push(view);
            }
            const name = new PIXI.Text(levelInfo.name, {
                fill: '#ffffff',
                fontSize: 24,
                fontWeight: 'bold'
            });
            console.log(this.progressViews[0].height);
            name.position.set(0, 38);
            name.anchor.set(0.5, 0.0);
            this.container.addChild(name);
            this.update();
        }
        getView() {
            return this.container;
        }
        update() {
            this.updateProgressView(0, ELevelProgress_2.ELevelProgress.Played);
            this.updateProgressView(1, ELevelProgress_2.ELevelProgress.Done);
            this.updateProgressView(2, ELevelProgress_2.ELevelProgress.PerfectlyDone);
        }
        updateProgressView(index, threshold) {
            const progress = this.levelInfo.progress;
            this.progressViews[index].alpha = progress >= threshold ? 1.0 : 0.1;
        }
        onSelection() {
            this.listener.onLevelSelected(this.index);
        }
    }
    exports.CLevelItem = CLevelItem;
});
/// <reference types="pixi.js" />
define("ui/levelSelection/CLevelSelectionMenu", ["require", "exports", "ui/levelSelection/CLevelItem"], function (require, exports, CLevelItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CLevelSelectionMenu = void 0;
    class CLevelSelectionMenu {
        constructor(levelsSetInfo, listener) {
            this.container = new PIXI.Container();
            this.items = [];
            // todo calculate basing on app size
            const levelsInRow = 6;
            const offsetX = 75;
            const offsetY = 150;
            const itemWidth = 64 + 64;
            const itemHeight = 90 + 40;
            const levels = levelsSetInfo.levels;
            for (let i = 0; i < levels.length; ++i) {
                const level = levels[i];
                const item = new CLevelItem_1.CLevelItem(level, i, listener);
                const col = i % levelsInRow;
                const row = Math.floor(i / levelsInRow);
                const view = item.getView();
                view.position.x = offsetX + itemWidth * col;
                view.position.y = offsetY + itemHeight * row;
                this.container.addChild(view);
                this.items.push(item);
            }
            const name = new PIXI.Text('Select Level', {
                fill: '#ffffff',
                fontSize: 46,
                fontWeight: 'bold'
            });
            name.anchor.set(0.5);
            name.position.set(400, 50);
            this.container.addChild(name);
        }
        update() {
            for (let item of this.items) {
                item.update();
            }
        }
        getView() {
            return this.container;
        }
    }
    exports.CLevelSelectionMenu = CLevelSelectionMenu;
});
define("physics/shaderPrograms/IterationProgram", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fragmentShader = exports.vertexShader = void 0;
    exports.vertexShader = `
    precision mediump float;

    attribute vec2 aVertex;
    attribute vec2 aUv;

    uniform mat3 translationMatrix; // name from pixi.js
    uniform mat3 projectionMatrix; // name from pixi.js

    varying vec2 vUv;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertex, 1.0)).xy, 0.0, 1.0);
        vUv = aUv;
    }
`;
    exports.fragmentShader = `
    precision mediump float;

    varying vec2 vUv;

    uniform sampler2D uSampler; // name from pixi.js
    uniform vec2 uPixelStep;

    float getN(vec2 offset) {
        vec2 uv = vUv + offset;
        vec4 col = texture2D(uSampler, uv);
        return col.r * col.a;
    }

    void main() {
        float top = getN(vec2(0.0, -uPixelStep.y));
        float bottom = getN(vec2(0.0, uPixelStep.y));
        float left = getN(vec2(-uPixelStep.x, 0.0));
        float right = getN(vec2(uPixelStep.x, 0.0));

        vec4 current = texture2D(uSampler, vUv);

        float acceleration = -0.25 * (current.r - top + current.r - bottom + current.r - left + current.r - right);
        float damping = current.b;
        float obstacle = current.a;
        float velocity = current.g * damping + acceleration * obstacle;
        float value = current.r + velocity;

        gl_FragColor = vec4(value, velocity, damping, obstacle);
    }
`;
});
define("physics/shaderPrograms/FillBufferProgram", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fragmentShader = exports.vertexShader = void 0;
    exports.vertexShader = `
    precision mediump float;

    attribute vec2 aVertex;

    uniform mat3 translationMatrix; // name from pixi.js
    uniform mat3 projectionMatrix; // name from pixi.js

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertex, 1.0)).xy, 0.0, 1.0);
    }
`;
    exports.fragmentShader = `
    precision mediump float;

    uniform vec4 uColor;

    void main() {
        gl_FragColor = uColor;
    }
`;
});
define("physics/BufferValue", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pushToArray = exports.makeUniform = void 0;
    function makeUniform(value) {
        return {
            x: value.amlitude,
            y: value.velocity,
            width: value.damping,
            height: value.obstacle ? 0.0 : 1.0
        };
    }
    exports.makeUniform = makeUniform;
    function pushToArray(value, array) {
        array.push(value.amlitude, value.velocity, value.damping, value.obstacle ? 0.0 : 1.0);
        return array;
    }
    exports.pushToArray = pushToArray;
});
define("physics/BufferComponents", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
/// <reference types="pixi.js" />
define("physics/CBufferFiller", ["require", "exports", "physics/shaderPrograms/FillBufferProgram", "physics/BufferValue"], function (require, exports, FillBufferProgram, BufferValue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CBufferFiller = void 0;
    class CBufferFiller {
        constructor(renderer) {
            this.renderer = renderer;
            const program = PIXI.Program.from(FillBufferProgram.vertexShader, FillBufferProgram.fragmentShader);
            this.material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
                program: program
            });
        }
        fillRectangle(buffer, x, y, width, height, value, components) {
            const geometry = new PIXI.Geometry()
                .addAttribute('aVertex', [x, y,
                x + width, y,
                x + width, y + height,
                x, y + height], 2)
                .addIndex([0, 1, 2, 0, 2, 3]);
            this.material.uniforms.uColor = BufferValue_1.makeUniform(value);
            const quad = new PIXI.Mesh(geometry, this.material);
            quad.state.blend = false;
            this.renderer.gl.colorMask(components.amlitude, components.velocity, components.damping, components.obstacle);
            this.renderer.render(quad, buffer, false);
            this.renderer.gl.colorMask(true, true, true, true);
            quad.destroy();
            geometry.destroy();
        }
    }
    exports.CBufferFiller = CBufferFiller;
});
define("physics/shaderPrograms/GradientFillBufferProgram", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fragmentShader = exports.vertexShader = void 0;
    exports.vertexShader = `
    precision mediump float;

    attribute vec2 aVertex;
    attribute vec4 aColor;

    uniform mat3 translationMatrix; // name from pixi.js
    uniform mat3 projectionMatrix; // name from pixi.js

    varying vec4 vColor;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertex, 1.0)).xy, 0.0, 1.0);
        vColor = aColor;
    }
`;
    exports.fragmentShader = `
    precision mediump float;

    varying vec4 vColor;

    void main() {
        gl_FragColor = vColor;
    }
`;
});
/// <reference types="pixi.js" />
define("physics/CBufferGradientFiller", ["require", "exports", "physics/shaderPrograms/GradientFillBufferProgram", "physics/BufferValue"], function (require, exports, GradientFillBufferProgram, BufferValue_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CBufferGradientFiller = void 0;
    class CBufferGradientFiller {
        constructor(renderer) {
            this.renderer = renderer;
            const program = PIXI.Program.from(GradientFillBufferProgram.vertexShader, GradientFillBufferProgram.fragmentShader);
            this.material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
                program: program
            });
        }
        fillCircle(buffer, x, y, radius, valueMin, valueMax, components) {
            // todo: caclulate number of points depending on radius
            const points = 10;
            const vertices = [
                0, 0,
                radius * Math.cos(0 * Math.PI / 4), radius * Math.sin(0 * Math.PI / 4),
                radius * Math.cos(1 * Math.PI / 4), radius * Math.sin(1 * Math.PI / 4),
                radius * Math.cos(2 * Math.PI / 4), radius * Math.sin(2 * Math.PI / 4),
                radius * Math.cos(3 * Math.PI / 4), radius * Math.sin(3 * Math.PI / 4),
                radius * Math.cos(4 * Math.PI / 4), radius * Math.sin(4 * Math.PI / 4),
                radius * Math.cos(5 * Math.PI / 4), radius * Math.sin(5 * Math.PI / 4),
                radius * Math.cos(6 * Math.PI / 4), radius * Math.sin(6 * Math.PI / 4),
                radius * Math.cos(7 * Math.PI / 4), radius * Math.sin(7 * Math.PI / 4),
                radius * Math.cos(8 * Math.PI / 4), radius * Math.sin(8 * Math.PI / 4)
            ];
            const colors = BufferValue_2.pushToArray(valueMax, []);
            for (let i = 0; i < points - 1; ++i) {
                BufferValue_2.pushToArray(valueMin, colors);
            }
            const geometry = new PIXI.Geometry()
                .addAttribute('aVertex', vertices, 2)
                .addAttribute('aColor', colors, 4);
            const quad = new PIXI.Mesh(geometry, this.material, null, PIXI.DRAW_MODES.TRIANGLE_FAN);
            quad.state.blend = false;
            quad.position.set(x, y);
            this.renderer.gl.colorMask(components.amlitude, components.velocity, components.damping, components.obstacle);
            this.renderer.render(quad, buffer, false);
            this.renderer.gl.colorMask(true, true, true, true);
            quad.destroy();
            geometry.destroy();
        }
    }
    exports.CBufferGradientFiller = CBufferGradientFiller;
});
define("physics/CAmplitudeAccessor", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CAmplitudeAccessor = void 0;
    class CAmplitudeAccessor {
        constructor(buffer, width, height) {
            this.buffer = buffer;
            this.width = width;
        }
        getAmplitude(x, y) {
            const index = (y * this.width + x) * 4;
            return this.buffer[index];
        }
    }
    exports.CAmplitudeAccessor = CAmplitudeAccessor;
});
/// <reference types="pixi.js" />
define("physics/CWavesPhysics", ["require", "exports", "physics/shaderPrograms/IterationProgram", "physics/CBufferFiller", "physics/CBufferGradientFiller", "physics/CAmplitudeAccessor"], function (require, exports, IterationProgram, CBufferFiller_1, CBufferGradientFiller_1, CAmplitudeAccessor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CWavesPhysics = void 0;
    class CWavesPhysics {
        constructor(renderer, width, height) {
            this.renderer = renderer;
            this.width = width;
            this.height = height;
            this.bufferFiller = new CBufferFiller_1.CBufferFiller(renderer);
            this.bufferGradientFiller = new CBufferGradientFiller_1.CBufferGradientFiller(renderer);
            this.activeBuffer = this.createBuffer(width, height);
            this.processingBuffer = this.createBuffer(width, height);
            const geometry = new PIXI.Geometry()
                .addAttribute('aVertex', [0, 0,
                width, 0,
                width, height,
                0, height], 2)
                .addAttribute('aUv', [0, 0,
                1, 0,
                1, 1,
                0, 1], 2)
                .addIndex([0, 1, 2, 0, 2, 3]);
            const program = PIXI.Program.from(IterationProgram.vertexShader, IterationProgram.fragmentShader);
            const material = new PIXI.MeshMaterial(this.processingBuffer, {
                program: program,
                uniforms: {
                    uPixelStep: {
                        x: 1 / width,
                        y: 1 / height
                    }
                }
            });
            this.iterationQuad = new PIXI.Mesh(geometry, material);
            this.iterationQuad.state.blend = false;
            this.reset();
        }
        iterate() {
            const swap = this.activeBuffer;
            this.activeBuffer = this.processingBuffer;
            this.processingBuffer = swap;
            this.iterationQuad.material.texture = this.processingBuffer;
            this.renderer.render(this.iterationQuad, this.activeBuffer, true);
            this.iterationNumber++;
        }
        emitCircleWave(x, y, radius, value) {
            this.bufferGradientFiller.fillCircle(this.activeBuffer, x, y, radius, {
                amlitude: 0.0,
                velocity: 0.0,
                damping: 0.0,
                obstacle: false
            }, {
                amlitude: value,
                velocity: 0.0,
                damping: 0.0,
                obstacle: false
            }, {
                amlitude: true,
                velocity: true,
                damping: false,
                obstacle: false
            });
        }
        putRectangleObstacle(x, y, width, height) {
            this.bufferFiller.fillRectangle(this.activeBuffer, x, y, width, height, {
                amlitude: 0.0,
                velocity: 0.0,
                damping: 0.0,
                obstacle: true
            }, {
                amlitude: false,
                velocity: false,
                damping: false,
                obstacle: true
            });
        }
        makeAmplitudeAccessor(x, y, width, height) {
            // todo: create once on init
            var buffer = new Float32Array(4 * width * height); // 4 components per pixel
            this.renderer.renderTexture.bind(this.activeBuffer);
            const gl = this.renderer.gl;
            gl.readPixels(x, y, width, height, gl.RGBA, gl.FLOAT, buffer);
            return new CAmplitudeAccessor_1.CAmplitudeAccessor(buffer, width, height);
        }
        reset() {
            // set slight gradient damping on the edges to avoid reflactions   
            const pixelOffset = 40;
            const maxDampingOffset = 20 / 255;
            for (let i = 0; i <= pixelOffset; ++i) {
                this.bufferFiller.fillRectangle(this.activeBuffer, i, i, this.width - 2 * i, this.height - 2 * i, {
                    amlitude: 0.0,
                    velocity: 0.0,
                    damping: 1.0 - (pixelOffset - i) / pixelOffset * maxDampingOffset,
                    obstacle: false
                }, {
                    amlitude: true,
                    velocity: true,
                    damping: true,
                    obstacle: true
                });
            }
            this.iterationNumber = 0;
        }
        getActivateBuffer() {
            return this.activeBuffer;
        }
        getIterationNumber() {
            return this.iterationNumber;
        }
        createBuffer(width, height) {
            const tex = new PIXI.BaseRenderTexture({
                width: width,
                height: height,
                scaleMode: PIXI.SCALE_MODES.NEAREST
            });
            tex.mipmap = PIXI.MIPMAP_MODES.OFF;
            tex.wrapMode = PIXI.WRAP_MODES.CLAMP;
            tex.format = PIXI.FORMATS.RGBA;
            tex.type = PIXI.TYPES.FLOAT;
            return new PIXI.RenderTexture(tex);
        }
    }
    exports.CWavesPhysics = CWavesPhysics;
});
define("physics/shaders/VisualizationShader", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fragment = exports.vertex = void 0;
    exports.vertex = `
    precision mediump float;

    attribute vec2 aVertexPosition;
    attribute vec2 aUvs;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying vec2 vUvs;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
        vUvs = aUvs;
    }
`;
    exports.fragment = `
    precision mediump float;

    varying vec2 vUvs;
    
    uniform sampler2D uSampler;

    float magnify(float x) {
        return clamp(x * 20.0, 0.0, 1.0);
    }

    void main() {
        vec4 color = texture2D(uSampler, vUvs);
        // gl_FragColor = color;
        gl_FragColor = vec4(
            magnify(color.r), 
            1.0 - color.a,
            magnify(-color.r), 
            1.0);
    }
`;
});
/// <reference types="pixi.js" />
define("ui/gameRound/CWavesView", ["require", "exports", "physics/shaders/VisualizationShader"], function (require, exports, VisualizationShader) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CWavesView = void 0;
    class CWavesView {
        constructor(physics) {
            this.physics = physics;
            const buffer = physics.getActivateBuffer();
            const geometry = new PIXI.Geometry()
                .addAttribute('aVertexPosition', [0, 0,
                buffer.width, 0,
                buffer.width, buffer.height,
                0, buffer.height], 2)
                .addAttribute('aUvs', [0, 0,
                1, 0,
                1, 1,
                0, 1], 2)
                .addIndex([0, 1, 2, 0, 2, 3]);
            const onscreenProgram = PIXI.Program.from(VisualizationShader.vertex, VisualizationShader.fragment);
            const onscreenMaterial = new PIXI.MeshMaterial(buffer, {
                program: onscreenProgram
            });
            this.view = new PIXI.Mesh(geometry, onscreenMaterial);
        }
        update() {
            this.view.material.texture = this.physics.getActivateBuffer();
        }
        getView() {
            return this.view;
        }
    }
    exports.CWavesView = CWavesView;
});
/// <reference types="pixi.js" />
define("ui/gameRound/CObstacleView", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CObstacleView = void 0;
    class CObstacleView {
        constructor(obstacleInfo) {
            this.view = new PIXI.Graphics();
            this.view.beginFill(0xFFFFFF, 1.0);
            this.view.drawRect(obstacleInfo.x, obstacleInfo.y, obstacleInfo.width, obstacleInfo.height);
            this.view.endFill();
        }
        getView() {
            return this.view;
        }
    }
    exports.CObstacleView = CObstacleView;
});
/// <reference types="pixi.js" />
define("ui/gameRound/CTimerView", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CTimerView = void 0;
    class CTimerView {
        constructor() {
            this.expectedTimeView = new PIXI.Text('', {
                fill: '#ffffff',
                fontSize: 36
            });
            this.expectedTimeView.anchor.set(0.0, 0.5);
            this.actualTimeView = new PIXI.Text('', {
                fill: '#ffffff',
                fontSize: 36
            });
            this.actualTimeView.anchor.set(1.0, 0.5);
            this.view = new PIXI.Container();
            this.view.addChild(this.expectedTimeView);
            this.view.addChild(this.actualTimeView);
        }
        setExpectedTime(expectedTime) {
            this.expectedTimeView.text = '/ ' + this.formatTime(expectedTime) + ' s';
        }
        update(actualTime) {
            this.actualTimeView.text = this.formatTime(actualTime) + ' ';
        }
        getView() {
            return this.view;
        }
        formatTime(iterations) {
            const secondsInIteration = 1 / 60;
            const seconds = iterations * secondsInIteration;
            return (Math.round(seconds * 10) / 10).toString(10);
        }
    }
    exports.CTimerView = CTimerView;
});
/// <reference types="pixi.js" />
define("ui/gameRound/sensors/CBaseRadialSensor", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CBaseRadialSensor = void 0;
    class CBaseRadialSensor {
        constructor(sensorInfo, markerColor, numberOfMarkers) {
            this.sensorInfo = sensorInfo;
            this.activationPercentage = 0;
            this.percentage = new PIXI.Text('0%', {
                fill: '#ffffff',
                fontSize: 20
            });
            this.percentage.anchor.set(0.5, 0.5);
            const r = sensorInfo.radius;
            const markerRadius = 5;
            const smallR = r - 2 * markerRadius;
            const markerOffset = Math.PI / 2 + (numberOfMarkers - 1) * Math.PI / 9;
            const markerStep = 2 * Math.PI / 9;
            this.graphics = new PIXI.Graphics();
            this.graphics.lineStyle(3, 0xffffff, 1.0);
            this.graphics.drawCircle(0, 0, r);
            for (let i = 0, a = markerOffset; i < numberOfMarkers; ++i, a -= markerStep) {
                this.graphics.lineStyle(1, 0x000000);
                this.graphics.beginFill(markerColor, 1.0);
                this.graphics.drawCircle(smallR * Math.cos(a), smallR * Math.sin(a), markerRadius);
                this.graphics.endFill();
            }
            this.view = new PIXI.Container();
            this.view.addChild(this.graphics);
            this.view.addChild(this.percentage);
            this.view.position.set(sensorInfo.x, sensorInfo.y);
        }
        update(physics) {
            const accessor = physics.makeAmplitudeAccessor(this.sensorInfo.x - this.sensorInfo.radius, this.sensorInfo.y - this.sensorInfo.radius, 2 * this.sensorInfo.radius, 2 * this.sensorInfo.radius);
            this.activationPercentage = this.caclActivationPercentage(accessor);
            this.updateVisualization();
        }
        isActivated() {
            return this.activationPercentage >= 1.0;
        }
        getView() {
            return this.view;
        }
        updateVisualization() {
            this.view.alpha = this.isActivated() ? 1.0 : 0.4;
            this.percentage.text = Math.round(this.activationPercentage * 100) + '%';
        }
    }
    exports.CBaseRadialSensor = CBaseRadialSensor;
});
define("ui/gameRound/sensors/CPositiveRadialSensor", ["require", "exports", "ui/gameRound/sensors/CBaseRadialSensor"], function (require, exports, CBaseRadialSensor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CPositiveRadialSensor = void 0;
    class CPositiveRadialSensor extends CBaseRadialSensor_1.CBaseRadialSensor {
        constructor(sensorInfo) {
            super(sensorInfo, 0xFF0000, sensorInfo.threshold > 0.02 ? 2 : 1);
        }
        caclActivationPercentage(accessor) {
            const radius = this.sensorInfo.radius;
            const width = 2 * radius;
            let closerAmplitude = -Infinity;
            for (let y = 0; y < width; ++y) {
                for (let x = 0; x < width; ++x) {
                    const dx = radius - x;
                    const dy = radius - y;
                    const inCircle = (dx * dx + dy * dy <= radius * radius);
                    const value = accessor.getAmplitude(x, y);
                    if (inCircle && value >= this.sensorInfo.threshold) {
                        return 1.0;
                    }
                    else if (inCircle && value > closerAmplitude) {
                        closerAmplitude = value;
                    }
                }
            }
            if (closerAmplitude < 0.0) {
                closerAmplitude = 0.0;
            }
            return closerAmplitude / this.sensorInfo.threshold;
        }
    }
    exports.CPositiveRadialSensor = CPositiveRadialSensor;
});
define("ui/gameRound/sensors/CNoWavesRadialSensor", ["require", "exports", "ui/gameRound/sensors/CBaseRadialSensor"], function (require, exports, CBaseRadialSensor_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CNoWavesRadialSensor = void 0;
    class CNoWavesRadialSensor extends CBaseRadialSensor_2.CBaseRadialSensor {
        constructor(sensorInfo) {
            super(sensorInfo, 0x999999, 1);
        }
        caclActivationPercentage(accessor) {
            const radius = this.sensorInfo.radius;
            const width = 2 * radius;
            let hasOverflow = false;
            let biggestAmplitude = this.sensorInfo.threshold;
            for (let y = 0; y < width; ++y) {
                for (let x = 0; x < width; ++x) {
                    const dx = radius - x;
                    const dy = radius - y;
                    const inCircle = (dx * dx + dy * dy <= radius * radius);
                    const value = accessor.getAmplitude(x, y);
                    const absValue = Math.abs(value);
                    if (inCircle && absValue >= biggestAmplitude) {
                        biggestAmplitude = absValue;
                    }
                }
            }
            if (biggestAmplitude > 1.0) {
                biggestAmplitude = 1.0;
            }
            return (1 - biggestAmplitude) / (1.0 - this.sensorInfo.threshold);
        }
    }
    exports.CNoWavesRadialSensor = CNoWavesRadialSensor;
});
define("ui/gameRound/sensors/CNegativeRadialSensor", ["require", "exports", "ui/gameRound/sensors/CBaseRadialSensor"], function (require, exports, CBaseRadialSensor_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CNegativeRadialSensor = void 0;
    class CNegativeRadialSensor extends CBaseRadialSensor_3.CBaseRadialSensor {
        constructor(sensorInfo) {
            super(sensorInfo, 0x0000FF, sensorInfo.threshold > 0.02 ? 2 : 1);
        }
        caclActivationPercentage(accessor) {
            const radius = this.sensorInfo.radius;
            const width = 2 * radius;
            let closerAmplitude = +Infinity;
            for (let y = 0; y < width; ++y) {
                for (let x = 0; x < width; ++x) {
                    const dx = radius - x;
                    const dy = radius - y;
                    const inCircle = (dx * dx + dy * dy <= radius * radius);
                    const value = accessor.getAmplitude(x, y);
                    if (inCircle && value <= -this.sensorInfo.threshold) {
                        return 1.0;
                    }
                    else if (inCircle && value < closerAmplitude) {
                        closerAmplitude = value;
                    }
                }
            }
            if (closerAmplitude > 0.0) {
                closerAmplitude = 0.0;
            }
            return -closerAmplitude / this.sensorInfo.threshold;
        }
    }
    exports.CNegativeRadialSensor = CNegativeRadialSensor;
});
define("ui/gameRound/sensors/SensorsFactory", ["require", "exports", "levels/ESensorType", "ui/gameRound/sensors/CPositiveRadialSensor", "ui/gameRound/sensors/CNoWavesRadialSensor", "ui/gameRound/sensors/CNegativeRadialSensor"], function (require, exports, ESensorType_2, CPositiveRadialSensor_1, CNoWavesRadialSensor_1, CNegativeRadialSensor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeSensor = void 0;
    function makeSensor(sensorInfo) {
        switch (sensorInfo.type) {
            case ESensorType_2.ESensorType.Positive:
                return new CPositiveRadialSensor_1.CPositiveRadialSensor(sensorInfo);
            case ESensorType_2.ESensorType.NoWave:
                return new CNoWavesRadialSensor_1.CNoWavesRadialSensor(sensorInfo);
            case ESensorType_2.ESensorType.Negative:
                return new CNegativeRadialSensor_1.CNegativeRadialSensor(sensorInfo);
        }
        throw new Error('Sensor type not implemented');
    }
    exports.makeSensor = makeSensor;
});
/// <reference types="pixi.js" />
define("ui/gameRound/CToolsSelectionView", ["require", "exports", "levels/EToolType"], function (require, exports, EToolType_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CToolsSelectionView = void 0;
    class CToolsSelectionView {
        constructor() {
            this.view = new PIXI.Container();
            const bg = new PIXI.Graphics();
            bg.beginFill(0x000000);
            bg.lineStyle(4, 0xFFFFFF);
            bg.drawRoundedRect(-80, -40, 160, 80, 10);
            bg.endFill();
            this.view.addChild(bg);
            this.positiveWave = new PIXI.Sprite(PIXI.Texture.from('data/img/emitRedWave.png'));
            this.positiveWave.anchor.set(0.5, 0.5);
            this.positiveWave.position.set(-35, 0);
            this.positiveWave.interactive = true;
            this.positiveWave.buttonMode = true;
            this.positiveWave.on('pointerup', function (event) {
                this.selectedTool = EToolType_2.EToolType.PositiveWave;
                this.updateVisualization();
                event.stopPropagation();
            }, this);
            this.view.addChild(this.positiveWave);
            this.negativeWave = new PIXI.Sprite(PIXI.Texture.from('data/img/emitBlueWave.png'));
            this.negativeWave.anchor.set(0.5, 0.5);
            this.negativeWave.position.set(35, 0);
            this.negativeWave.interactive = true;
            this.negativeWave.buttonMode = true;
            this.negativeWave.on('pointerup', function (event) {
                this.selectedTool = EToolType_2.EToolType.NegativeWave;
                this.updateVisualization();
                event.stopPropagation();
            }, this);
            this.view.addChild(this.negativeWave);
            this.selectedFrame = new PIXI.Graphics();
            this.selectedFrame.lineStyle(2, 0xFFFFFF);
            this.selectedFrame.drawRoundedRect(-25, -25, 50, 50, 3);
            this.view.addChild(this.selectedFrame);
            this.selectedTool = EToolType_2.EToolType.PositiveWave;
            this.updateVisualization();
        }
        setAvailableTools(tools) {
            this.selectedTool = EToolType_2.EToolType.PositiveWave;
            this.updateVisualization();
        }
        getSelectedTool() {
            return this.selectedTool;
        }
        getView() {
            return this.view;
        }
        updateVisualization() {
            if (this.selectedTool === EToolType_2.EToolType.PositiveWave) {
                this.selectedFrame.position.set(-35, 0);
            }
            else {
                this.selectedFrame.position.set(35, 0);
            }
        }
    }
    exports.CToolsSelectionView = CToolsSelectionView;
});
/// <reference types="pixi.js" />
define("ui/gameRound/CHintView", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHintView = void 0;
    class CHintView {
        constructor(hintInfo) {
            const text = new PIXI.Text(hintInfo.description, {
                fill: '#ffffff',
                fontSize: 20,
                align: hintInfo.align
            });
            text.position.set(hintInfo.x, hintInfo.y);
            text.anchor.set(hintInfo.anchor.x, hintInfo.anchor.y);
            const graphics = new PIXI.Graphics();
            if (hintInfo.pointTo) {
                const horizontalDirection = hintInfo.x > hintInfo.pointTo.x ? -1 : 1;
                graphics.lineStyle(2, 0xFFFFFF);
                graphics.moveTo(hintInfo.pointTo.x, hintInfo.pointTo.y);
                graphics.lineTo(hintInfo.pointTo.x - 10, hintInfo.pointTo.y + 10);
                graphics.moveTo(hintInfo.pointTo.x, hintInfo.pointTo.y);
                graphics.lineTo(hintInfo.pointTo.x + 10, hintInfo.pointTo.y + 10);
                graphics.moveTo(hintInfo.pointTo.x, hintInfo.pointTo.y);
                graphics.lineTo(hintInfo.pointTo.x, hintInfo.y);
                graphics.lineTo(hintInfo.x + 5 * horizontalDirection, hintInfo.y);
            }
            this.view = new PIXI.Container();
            this.view.addChild(text);
            this.view.addChild(graphics);
        }
        getView() {
            return this.view;
        }
    }
    exports.CHintView = CHintView;
});
/// <reference types="pixi.js" />
define("ui/gameRound/CRadialEmiter", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CRadialEmiter = void 0;
    class CRadialEmiter {
        constructor(emiterInfo, physics) {
            this.emiterInfo = emiterInfo;
            this.physics = physics;
            this.activationIteration = physics.getIterationNumber();
            this.enabled = emiterInfo.enabled;
            const graphics = new PIXI.Graphics();
            graphics.lineStyle(3, this.emiterInfo.enableable ? 0x00FF00 : 0xFF0000, 1.0);
            graphics.beginFill(0x777777);
            graphics.drawCircle(0, 0, emiterInfo.visualRadius);
            graphics.endFill();
            this.view = new PIXI.Container();
            this.view.addChild(graphics);
            this.view.position.set(emiterInfo.x, emiterInfo.y);
            if (this.emiterInfo.enableable) {
                this.view.interactive = true;
                this.view.buttonMode = true;
            }
            this.updateVisualization();
        }
        update() {
            const dt = this.physics.getIterationNumber() - this.activationIteration;
            if (this.enabled && dt % this.emiterInfo.period === 0) {
                this.physics.emitCircleWave(this.emiterInfo.x, this.emiterInfo.y, this.emiterInfo.radius, this.emiterInfo.amlitude);
            }
        }
        testHit(x, y) {
            const dx = this.emiterInfo.x - x;
            const dy = this.emiterInfo.y - y;
            return dx * dx + dy * dy <= this.emiterInfo.visualRadius * this.emiterInfo.visualRadius;
        }
        toggle() {
            if (this.emiterInfo.enableable) {
                this.enabled = !this.enabled;
                this.activationIteration = this.physics.getIterationNumber();
                this.updateVisualization();
            }
        }
        getView() {
            return this.view;
        }
        updateVisualization() {
            this.view.alpha = this.enabled ? 1.0 : 0.4;
        }
    }
    exports.CRadialEmiter = CRadialEmiter;
});
/// <reference types="pixi.js" />
define("ui/gameRound/CGameRoundView", ["require", "exports", "ui/gameRound/CWavesView", "ui/gameRound/CObstacleView", "levels/ELevelProgress", "ui/gameRound/CTimerView", "ui/gameRound/sensors/SensorsFactory", "ui/gameRound/CToolsSelectionView", "levels/EToolType", "ui/gameRound/CHintView", "ui/gameRound/CRadialEmiter"], function (require, exports, CWavesView_1, CObstacleView_1, ELevelProgress_3, CTimerView_1, SensorsFactory_1, CToolsSelectionView_1, EToolType_3, CHintView_1, CRadialEmiter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CGameRoundView = void 0;
    class CGameRoundView {
        constructor(physics) {
            this.physics = physics;
            this.container = new PIXI.Container();
            this.wavesView = new CWavesView_1.CWavesView(physics);
            this.sensors = [];
            this.emiters = [];
            this.staticObjects = [];
            this.nextSensorToProcess = 0;
            this.numberOfClicks = 0;
            this.activationTimepoint = 0;
            this.timerView = new CTimerView_1.CTimerView();
            this.timerView.getView().position.set(390, 35);
            this.toolSelectionView = new CToolsSelectionView_1.CToolsSelectionView();
            this.toolSelectionView.getView().position.set(390, 565);
            this.container.addChild(this.wavesView.getView());
            this.container.addChild(this.timerView.getView());
            this.container.addChild(this.toolSelectionView.getView());
            this.container.interactive = true;
            this.container.on('pointerup', CGameRoundView.prototype.onClick, this);
        }
        loadLevel(level) {
            this.reset();
            this.levelInfo = level;
            for (let sensorInfo of level.sensors) {
                const sensor = SensorsFactory_1.makeSensor(sensorInfo);
                this.sensors.push(sensor);
                this.container.addChild(sensor.getView());
            }
            for (let emiterInfo of level.emiters) {
                const emiter = new CRadialEmiter_1.CRadialEmiter(emiterInfo, this.physics);
                this.emiters.push(emiter);
                this.container.addChild(emiter.getView());
            }
            for (let obstacleInfo of level.obstacles) {
                this.physics.putRectangleObstacle(obstacleInfo.x, obstacleInfo.y, obstacleInfo.width, obstacleInfo.height);
                const obstacle = new CObstacleView_1.CObstacleView(obstacleInfo);
                this.staticObjects.push(obstacle.getView());
                this.container.addChild(obstacle.getView());
            }
            for (let hintInfo of level.hints) {
                const hint = new CHintView_1.CHintView(hintInfo);
                this.staticObjects.push(hint.getView());
                this.container.addChild(hint.getView());
            }
            this.timerView.setExpectedTime(level.iterationsInActiveState);
            this.toolSelectionView.setAvailableTools(level.availableTools);
            this.toolSelectionView.getView().visible = level.availableTools.length >= 2;
        }
        update() {
            for (let emiter of this.emiters) {
                emiter.update();
            }
            this.physics.iterate();
            // we are updating one sensor per cycle to increase fps
            if (this.nextSensorToProcess < this.sensors.length) {
                this.sensors[this.nextSensorToProcess].update(this.physics);
                this.nextSensorToProcess = (this.nextSensorToProcess + 1) % this.sensors.length;
            }
            if (this.isAllSensorsActive()) {
                if (this.activationTimepoint === 0) {
                    this.activationTimepoint = this.physics.getIterationNumber();
                }
            }
            else if (this.activationTimepoint > 0) {
                this.activationTimepoint = 0;
            }
            this.timerView.update(this.getActiveTime());
            this.wavesView.update();
        }
        isRoundEnded() {
            return this.isSensorsActiveLongEnough();
        }
        getProgress() {
            let progress = ELevelProgress_3.ELevelProgress.Played;
            if (this.numberOfClicks <= this.levelInfo.targetNumberOfClicks) {
                progress += 1;
            }
            if (this.isSensorsActiveLongEnough()) {
                progress += 1;
            }
            return progress;
        }
        getView() {
            return this.container;
        }
        reset() {
            this.physics.reset();
            this.timerView.update(0);
            for (let sensor of this.sensors) {
                this.container.removeChild(sensor.getView());
            }
            for (let emiter of this.emiters) {
                this.container.removeChild(emiter.getView());
            }
            for (let object of this.staticObjects) {
                this.container.removeChild(object);
            }
            this.sensors = [];
            this.emiters = [];
            this.staticObjects = [];
            this.nextSensorToProcess = 0;
            this.numberOfClicks = 0;
            this.activationTimepoint = 0;
        }
        isAllSensorsActive() {
            for (let sensor of this.sensors) {
                if (!sensor.isActivated()) {
                    return false;
                }
            }
            return true;
        }
        getActiveTime() {
            if (this.activationTimepoint === 0) {
                return 0;
            }
            return this.physics.getIterationNumber() - this.activationTimepoint;
        }
        isSensorsActiveLongEnough() {
            return this.getActiveTime() >= this.levelInfo.iterationsInActiveState;
        }
        onClick(event) {
            const type = this.toolSelectionView.getSelectedTool();
            const value = (type === EToolType_3.EToolType.PositiveWave ? 1.0 : -1.0);
            const x = event.data.global.x;
            const y = event.data.global.y;
            for (let sensorInfo of this.levelInfo.sensors) {
                const dx = sensorInfo.x - x;
                const dy = sensorInfo.y - y;
                if (dx * dx + dy * dy <= sensorInfo.radius * sensorInfo.radius) {
                    return;
                }
            }
            for (let emiter of this.emiters) {
                if (emiter.testHit(x, y)) {
                    emiter.toggle();
                    return;
                }
            }
            this.physics.emitCircleWave(x, y, 6.0, value);
            this.numberOfClicks++;
        }
    }
    exports.CGameRoundView = CGameRoundView;
});
/// <reference types="pixi.js" />
define("ui/popUpMenu/CBasePopUpMenu", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CBasePopUpMenu = void 0;
    class CBasePopUpMenu {
        constructor(title, width, height, buttonsOffset) {
            this.view = new PIXI.Container();
            const background = new PIXI.Graphics();
            background.beginFill(0x000000, 0.5);
            background.drawRect(-400, -300, 800, 600);
            background.endFill();
            background.lineStyle(10, 0xFFFFFF);
            background.beginFill(0x000000);
            background.drawRoundedRect(-width / 2, -height / 2, width, height, 20);
            background.endFill();
            background.interactive = true;
            background.on('pointerup', function (event) {
                event.stopPropagation();
            });
            const name = new PIXI.Text(title, {
                fill: '#ffffff',
                fontSize: 36,
                fontWeight: 'bold'
            });
            name.position.set(0, -height / 2 + 10);
            name.anchor.set(0.5, 0.0);
            const continueButton = new PIXI.Sprite(PIXI.Texture.from('data/img/play.png'));
            continueButton.interactive = true;
            continueButton.buttonMode = true;
            continueButton.anchor.set(0.5, 0.5);
            continueButton.position.set(-width / 3, buttonsOffset);
            this.continueButton = continueButton;
            const restartButton = new PIXI.Sprite(PIXI.Texture.from('data/img/replay.png'));
            restartButton.interactive = true;
            restartButton.buttonMode = true;
            restartButton.anchor.set(0.5, 0.5);
            restartButton.position.set(0, buttonsOffset);
            this.restartButton = restartButton;
            const menuButton = new PIXI.Sprite(PIXI.Texture.from('data/img/menu.png'));
            menuButton.interactive = true;
            menuButton.buttonMode = true;
            menuButton.anchor.set(0.5, 0.5);
            menuButton.position.set(width / 3, buttonsOffset);
            this.menuButton = menuButton;
            this.view.addChild(background);
            this.view.addChild(name);
            this.view.addChild(continueButton);
            this.view.addChild(restartButton);
            this.view.addChild(menuButton);
        }
        onContinueClick(fn, context) {
            this.continueButton.on('pointerup', fn, context);
        }
        onRestartClick(fn, context) {
            this.restartButton.on('pointerup', fn, context);
        }
        onMenuClick(fn, context) {
            this.menuButton.on('pointerup', fn, context);
        }
        getView() {
            return this.view;
        }
    }
    exports.CBasePopUpMenu = CBasePopUpMenu;
});
/// <reference types="pixi.js" />
define("ui/popUpMenu/CPausePopUpMenu", ["require", "exports", "ui/popUpMenu/CBasePopUpMenu"], function (require, exports, CBasePopUpMenu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CPausePopUpMenu = void 0;
    class CPausePopUpMenu extends CBasePopUpMenu_1.CBasePopUpMenu {
        constructor() {
            super("Pause", 300, 130, 20);
        }
    }
    exports.CPausePopUpMenu = CPausePopUpMenu;
});
/// <reference types="pixi.js" />
define("ui/popUpMenu/CRoundResultPopUpMenu", ["require", "exports", "ui/popUpMenu/CBasePopUpMenu", "levels/ELevelProgress"], function (require, exports, CBasePopUpMenu_2, ELevelProgress_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CRoundResultPopUpMenu = void 0;
    class CRoundResultPopUpMenu extends CBasePopUpMenu_2.CBasePopUpMenu {
        constructor(gameRound) {
            super("Results", 300, 220, 65);
            this.gameRound = gameRound;
            this.progressViews = [];
            const textures = ['data/img/progress1.png', 'data/img/progress2.png', 'data/img/progress3.png'];
            for (let i = 0; i < textures.length; ++i) {
                const view = new PIXI.Sprite(PIXI.Texture.from(textures[i]));
                view.anchor.set(0.5);
                view.position.set(0.0, -10);
                this.view.addChild(view);
                this.progressViews.push(view);
            }
        }
        show() {
            this.view.visible = true;
            const progress = this.gameRound.getProgress();
            this.updateProgressView(0, progress, ELevelProgress_4.ELevelProgress.Played);
            this.updateProgressView(1, progress, ELevelProgress_4.ELevelProgress.Done);
            this.updateProgressView(2, progress, ELevelProgress_4.ELevelProgress.PerfectlyDone);
        }
        hide() {
            this.view.visible = false;
        }
        updateProgressView(index, progress, threshold) {
            this.progressViews[index].alpha = progress >= threshold ? 1.0 : 0.4;
        }
    }
    exports.CRoundResultPopUpMenu = CRoundResultPopUpMenu;
});
define("levels/CProgressManager", ["require", "exports", "levels/LevelSet"], function (require, exports, LevelSet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CProgressManager = void 0;
    class CProgressManager {
        constructor(levelsSet) {
            this.levelsSet = LevelSet_1.levelSet;
        }
        save() {
            const progress = [];
            for (let level of this.levelsSet.levels) {
                progress.push(level.progress);
            }
            localStorage.setItem(CProgressManager.storageKey, JSON.stringify(progress));
        }
        load() {
            const json = localStorage.getItem(CProgressManager.storageKey);
            const progress = JSON.parse(json);
            if (progress instanceof Array) {
                for (let i = 0; i < progress.length; ++i) {
                    this.levelsSet.levels[i].progress = progress[i];
                }
            }
            else {
                this.save();
                return;
            }
        }
    }
    exports.CProgressManager = CProgressManager;
    CProgressManager.storageKey = 'progress';
});
/// <reference types="pixi.js" />
/// <reference types="stats" />
define("Main", ["require", "exports", "levels/LevelSet", "ui/levelSelection/CLevelSelectionMenu", "physics/CWavesPhysics", "ui/gameRound/CGameRoundView", "ui/popUpMenu/CPausePopUpMenu", "ui/popUpMenu/CRoundResultPopUpMenu", "levels/CProgressManager"], function (require, exports, LevelSet_2, CLevelSelectionMenu_1, CWavesPhysics_1, CGameRoundView_1, CPausePopUpMenu_1, CRoundResultPopUpMenu_1, CProgressManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const width = 800;
    const height = 600;
    function main() {
        const app = new PIXI.Application({ autoStart: false, width: width, height: height });
        document.body.appendChild(app.view);
        const stats = new Stats();
        document.body.appendChild(stats.dom);
        new CMain(app);
        function loop() {
            stats.begin();
            const time = performance.now();
            app.ticker.update(time);
            app.render();
            stats.end();
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }
    class CMain {
        constructor(app) {
            this.progressManager = new CProgressManager_1.CProgressManager(LevelSet_2.levelSet);
            this.progressManager.load();
            this.levelSelectionMenu = new CLevelSelectionMenu_1.CLevelSelectionMenu(LevelSet_2.levelSet, this);
            this.physics = new CWavesPhysics_1.CWavesPhysics(app.renderer, width, height);
            this.gameRound = new CGameRoundView_1.CGameRoundView(this.physics);
            const pauseButton = new PIXI.Sprite(PIXI.Texture.from('data/img/pause.png'));
            pauseButton.interactive = true;
            pauseButton.buttonMode = true;
            pauseButton.on('pointerup', CMain.prototype.onPause, this);
            pauseButton.anchor.set(0.0, 0.0);
            pauseButton.position.set(15, 15);
            this.gameRound.getView().addChild(pauseButton);
            const restartButton = new PIXI.Sprite(PIXI.Texture.from('data/img/replay.png'));
            restartButton.interactive = true;
            restartButton.buttonMode = true;
            restartButton.on('pointerup', CMain.prototype.onRestart, this);
            restartButton.anchor.set(1.0, 0.0);
            restartButton.position.set(width - 15, 15);
            this.gameRound.getView().addChild(restartButton);
            this.pauseMenu = new CPausePopUpMenu_1.CPausePopUpMenu();
            this.pauseMenu.getView().position.set(width / 2, height / 2);
            this.pauseMenu.onContinueClick(CMain.prototype.onResume, this);
            this.pauseMenu.onRestartClick(CMain.prototype.onRestart, this);
            this.pauseMenu.onMenuClick(CMain.prototype.onReturnToMenu, this);
            this.resultMenu = new CRoundResultPopUpMenu_1.CRoundResultPopUpMenu(this.gameRound);
            this.resultMenu.getView().position.set(width / 2, height / 2);
            this.resultMenu.onContinueClick(CMain.prototype.onNextLevel, this);
            this.resultMenu.onRestartClick(CMain.prototype.onRestart, this);
            this.resultMenu.onMenuClick(CMain.prototype.onReturnToMenu, this);
            this.selectedLevel = 0;
            this.isPaused = true;
            app.stage.addChild(this.levelSelectionMenu.getView());
            app.stage.addChild(this.gameRound.getView());
            app.stage.addChild(this.pauseMenu.getView());
            app.stage.addChild(this.resultMenu.getView());
            this.gameRound.getView().visible = false;
            this.pauseMenu.getView().visible = false;
            this.resultMenu.hide();
            app.ticker.add(CMain.prototype.onTick, this);
        }
        onLevelSelected(index) {
            this.gameRound.getView().visible = true;
            this.levelSelectionMenu.getView().visible = false;
            this.gameRound.loadLevel(LevelSet_2.levelSet.levels[index]);
            this.selectedLevel = index;
            this.isPaused = false;
        }
        onNextLevel(event) {
            this.resultMenu.hide();
            if (this.selectedLevel + 1 >= LevelSet_2.levelSet.levels.length) {
                this.onReturnToMenu(event);
            }
            else {
                this.onLevelSelected(this.selectedLevel + 1);
            }
            event.stopPropagation();
        }
        onPause(event) {
            this.isPaused = true;
            this.pauseMenu.getView().visible = true;
            event.stopPropagation();
        }
        onResume(event) {
            this.isPaused = false;
            this.pauseMenu.getView().visible = false;
            event.stopPropagation();
        }
        onRestart(event) {
            this.pauseMenu.getView().visible = false;
            this.resultMenu.hide();
            this.onLevelSelected(this.selectedLevel);
            event.stopPropagation();
        }
        onReturnToMenu(event) {
            this.isPaused = true;
            this.levelSelectionMenu.update();
            this.levelSelectionMenu.getView().visible = true;
            this.gameRound.getView().visible = false;
            this.pauseMenu.getView().visible = false;
            this.resultMenu.hide();
            event.stopPropagation();
        }
        onTick() {
            if (!this.isPaused) {
                this.gameRound.update();
                if (this.gameRound.isRoundEnded()) {
                    this.isPaused = true;
                    this.resultMenu.show();
                    const levelInfo = LevelSet_2.levelSet.levels[this.selectedLevel];
                    const progress = this.gameRound.getProgress();
                    if (progress > levelInfo.progress) {
                        levelInfo.progress = progress;
                        this.progressManager.save();
                    }
                }
            }
        }
    }
    main();
});
define("physics/shaders/DropShader", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fragment = exports.vertex = void 0;
    exports.vertex = `
    precision mediump float;
    attribute vec2 aVertexPosition;
    attribute float aVertexColorR;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying float vRed;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
        vRed = aVertexColorR;
    }
`;
    exports.fragment = `
    precision mediump float;

    varying float vRed;

    void main() {
        gl_FragColor = vec4(vRed, 0.0, 1.0, 1.0);
    }
`;
});
define("physics/shaders/DrawShader", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fragment = exports.vertex = void 0;
    exports.vertex = `
    precision mediump float;
    attribute vec2 aVertexPosition;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    }
`;
    exports.fragment = `
    precision mediump float;

    uniform vec4 uColor;

    void main() {
        gl_FragColor = uColor;
    }
`;
});
define("physics/shaders/IterationShader", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fragment = exports.vertex = void 0;
    exports.vertex = `
    precision mediump float;

    attribute vec2 aVertexPosition;
    attribute vec2 aUvs;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying vec2 vUvs;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
        vUvs = aUvs;
    }
`;
    exports.fragment = `
    precision mediump float;

    varying vec2 vUvs;

    uniform sampler2D uSampler;
    uniform vec2 uPixelStep;

    float getN(vec2 offset) {
        vec2 uv = vUvs + offset;
        vec4 col = texture2D(uSampler, uv);
        return col.r * col.a;
    }

    void main() {
        float top = getN(vec2(0.0, -uPixelStep.y));
        float bottom = getN(vec2(0.0, uPixelStep.y));
        float left = getN(vec2(-uPixelStep.x, 0.0));
        float right = getN(vec2(uPixelStep.x, 0.0));

        vec4 current = texture2D(uSampler, vUvs);

        float acceleration = -0.25 * (current.r - top + current.r - bottom + current.r - left + current.r - right);
        float damping = current.b;
        float obstacle = current.a;
        float velocity = current.g * damping + acceleration * obstacle;
        float value = current.r + velocity;

        gl_FragColor = vec4(value, velocity, damping, obstacle);
    }
`;
});
/// <reference types="pixi.js" />
/// <reference types="stats" />
define("physics/Main", ["require", "exports", "physics/shaders/DropShader", "physics/shaders/DrawShader", "physics/shaders/IterationShader", "physics/shaders/VisualizationShader"], function (require, exports, DropShader, DrawShader, IterationShader, VisualizationShader) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const width = 1024;
    const height = 512;
    function drawDrop(app, texture, position, radius) {
        const vertices = [
            0, 0,
            radius * Math.cos(0 * Math.PI / 4), radius * Math.sin(0 * Math.PI / 4),
            radius * Math.cos(1 * Math.PI / 4), radius * Math.sin(1 * Math.PI / 4),
            radius * Math.cos(2 * Math.PI / 4), radius * Math.sin(2 * Math.PI / 4),
            radius * Math.cos(3 * Math.PI / 4), radius * Math.sin(3 * Math.PI / 4),
            radius * Math.cos(4 * Math.PI / 4), radius * Math.sin(4 * Math.PI / 4),
            radius * Math.cos(5 * Math.PI / 4), radius * Math.sin(5 * Math.PI / 4),
            radius * Math.cos(6 * Math.PI / 4), radius * Math.sin(6 * Math.PI / 4),
            radius * Math.cos(7 * Math.PI / 4), radius * Math.sin(7 * Math.PI / 4),
            radius * Math.cos(8 * Math.PI / 4), radius * Math.sin(8 * Math.PI / 4)
        ];
        const colors = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const geometry = new PIXI.Geometry()
            .addAttribute('aVertexPosition', vertices, 2)
            .addAttribute('aVertexColorR', colors, 1);
        const program = PIXI.Program.from(DropShader.vertex, DropShader.fragment);
        const material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
            program: program
        });
        const circle = new PIXI.Mesh(geometry, material, null, PIXI.DRAW_MODES.TRIANGLE_FAN);
        circle.position.set(position.x, position.y);
        // need to set only amplitude and velocity
        app.renderer.gl.colorMask(true, true, false, false);
        app.renderer.render(circle, texture, false);
        app.renderer.gl.colorMask(true, true, true, true);
    }
    function drawRectangle(app, texture, position, size, color) {
        const geometry = new PIXI.Geometry()
            .addAttribute('aVertexPosition', [position.x, position.y,
            position.x + size.x, position.y,
            position.x + size.x, position.y + size.y,
            position.x, position.y + size.y], 2)
            .addIndex([0, 1, 2, 0, 2, 3]);
        const program = PIXI.Program.from(DrawShader.vertex, DrawShader.fragment);
        const material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
            program: program,
            uniforms: {
                uColor: {
                    x: color.r / 255,
                    y: color.g / 255,
                    width: color.b / 255,
                    height: color.a / 255
                }
            }
        });
        const quad = new PIXI.Mesh(geometry, material);
        app.renderer.state.setBlend(false);
        app.renderer.render(quad, texture, false);
        app.renderer.state.setBlend(true);
    }
    function createBuffer(width, height, format, type) {
        const tex = new PIXI.BaseRenderTexture({
            width: width,
            height: height,
            scaleMode: PIXI.SCALE_MODES.NEAREST
        });
        tex.mipmap = PIXI.MIPMAP_MODES.OFF;
        tex.wrapMode = PIXI.WRAP_MODES.CLAMP;
        tex.format = format;
        tex.type = type;
        return new PIXI.RenderTexture(tex);
    }
    function drawSensor(graphics, radius, activated) {
        graphics.clear();
        graphics.lineStyle(5, 0xffffff, activated ? 0.9 : 0.4);
        graphics.drawCircle(0, 0, radius);
    }
    function main() {
        const stats = new Stats();
        stats.showPanel(1); // ms
        document.body.appendChild(stats.dom);
        const app = new PIXI.Application({ width: width, height: height, transparent: true });
        document.body.appendChild(app.view);
        const firstBuffer = createBuffer(width, height, PIXI.FORMATS.RGBA, PIXI.TYPES.FLOAT);
        const secondBuffer = createBuffer(width, height, PIXI.FORMATS.RGBA, PIXI.TYPES.FLOAT);
        // set slight gradient damping on the edges to avoid reflactions   
        const offset = 40;
        for (let i = 0; i <= offset; ++i) {
            drawRectangle(app, firstBuffer, { x: i, y: i }, { x: width - 2 * i, y: height - 2 * i }, { r: 0, g: 0, b: 0xFF - (offset - i) / 2, a: 0xFF });
        }
        // draw wall 
        drawRectangle(app, firstBuffer, { x: 300, y: 245 }, { x: 10, y: 100 }, { r: 0x00, g: 0, b: 0xFF, a: 0x00 });
        const sensor = {
            x: 200,
            y: 250,
            r: 30
        };
        // drawSensorMask(app, sensorsMaskBuffer, sensor.x, sensor.y, sensor.r, 0.02, 1.0, 1);
        const quadGeometry = new PIXI.Geometry()
            .addAttribute('aVertexPosition', [0, 0,
            width, 0,
            width, height,
            0, height], 2)
            .addAttribute('aUvs', [0, 0,
            1, 0,
            1, 1,
            0, 1], 2)
            .addIndex([0, 1, 2, 0, 2, 3]);
        const iterationProgram = PIXI.Program.from(IterationShader.vertex, IterationShader.fragment);
        const iterationMaterial = new PIXI.MeshMaterial(firstBuffer, {
            program: iterationProgram,
            uniforms: {
                uPixelStep: {
                    x: 1 / width,
                    y: 1 / height
                }
            }
        });
        const iterationQuad = new PIXI.Mesh(quadGeometry, iterationMaterial);
        const onscreenProgram = PIXI.Program.from(VisualizationShader.vertex, VisualizationShader.fragment);
        let shownBuffer = firstBuffer;
        let offscreenBuffer = secondBuffer;
        const onscreenMaterial = new PIXI.MeshMaterial(shownBuffer, {
            program: onscreenProgram
        });
        const onscreenQuad = new PIXI.Mesh(quadGeometry, onscreenMaterial);
        app.stage.addChild(onscreenQuad);
        const sensorGraphics = new PIXI.Graphics();
        drawSensor(sensorGraphics, sensor.r, false);
        sensorGraphics.position.set(sensor.x, sensor.y);
        app.stage.addChild(sensorGraphics);
        var webglPixels = new Float32Array(4 * 4 * sensor.r * sensor.r);
        app.ticker.add(function () {
            stats.begin();
            for (let i = 0; i < 2; ++i) {
                const tmp = offscreenBuffer;
                offscreenBuffer = shownBuffer;
                shownBuffer = tmp;
                iterationMaterial.texture = offscreenBuffer;
                app.renderer.render(iterationQuad, shownBuffer, true);
            }
            app.renderer.renderTexture.bind(shownBuffer);
            const gl = app.renderer.gl;
            gl.readPixels(sensor.x - sensor.r, sensor.y - sensor.r, 2 * sensor.r, 2 * sensor.r, gl.RGBA, gl.FLOAT, webglPixels);
            const activated = (function () {
                const width = 2 * sensor.r;
                let max = -1.0;
                for (let y = 0; y < width; ++y) {
                    for (let x = 0; x < width; ++x) {
                        const dx = sensor.r - x;
                        const dy = sensor.r - y;
                        const inCircle = (dx * dx + dy * dy <= sensor.r * sensor.r);
                        const index = (y * width + x) * 4;
                        if (inCircle && webglPixels[index] > max) {
                            max = webglPixels[index];
                        }
                    }
                }
                // console.log(max);
                return max > 0.005;
            })();
            drawSensor(sensorGraphics, sensor.r, activated);
            stats.end();
            onscreenMaterial.texture = shownBuffer;
        });
        app.stage.interactive = true;
        app.stage.on('pointerup', pointerUp);
        function pointerUp(event) {
            drawDrop(app, shownBuffer, event.data.global, 6.0);
        }
    }
    main();
});
