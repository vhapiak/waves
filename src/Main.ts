/// <reference types="pixi.js" />
/// <reference types="stats" />

import { levelSet } from "./levels/LevelSet";
import { CLevelSelectionMenu } from "./ui/levelSelection/CLevelSelectionMenu";
import { CWavesPhysics } from "./physics/CWavesPhysics";
import { CGameRoundView } from "./ui/gameRound/CGameRoundView";
import { CPausePopUpMenu } from "./ui/popUpMenu/CPausePopUpMenu";
import { CRoundResultPopUpMenu } from "./ui/popUpMenu/CRoundResultPopUpMenu";
import { CProgressManager } from "./levels/CProgressManager";

const width = 800;
const height = 600;

function main(): void {
    const app = new PIXI.Application({autoStart: false, width: width, height: height});
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

class CMain implements IOnLevelSelected {
    constructor(app: PIXI.Application) {
        this.progressManager = new CProgressManager(levelSet);
        this.progressManager.load();

        this.levelSelectionMenu = new CLevelSelectionMenu(levelSet, this);

        this.physics = new CWavesPhysics(app.renderer, width, height);
        this.gameRound = new CGameRoundView(this.physics);

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

        this.pauseMenu = new CPausePopUpMenu();
        this.pauseMenu.getView().position.set(width / 2, height / 2);

        this.pauseMenu.onContinueClick(CMain.prototype.onResume, this);
        this.pauseMenu.onRestartClick(CMain.prototype.onRestart, this);
        this.pauseMenu.onMenuClick(CMain.prototype.onReturnToMenu, this);

        this.resultMenu = new CRoundResultPopUpMenu(this.gameRound);
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

    onLevelSelected(index: number): void {
        this.gameRound.getView().visible = true;
        this.levelSelectionMenu.getView().visible = false;
        this.gameRound.loadLevel(levelSet.levels[index]);

        this.selectedLevel = index;
        this.isPaused = false;
    }

    onNextLevel(event: PIXI.InteractionEvent) {
        this.resultMenu.hide();
        if (this.selectedLevel + 1 >= levelSet.levels.length) {
            this.onReturnToMenu(event);
        } else {
            this.onLevelSelected(this.selectedLevel + 1);
        }
        event.stopPropagation();
    }

    onPause(event: PIXI.InteractionEvent) {
        this.isPaused = true;
        this.pauseMenu.getView().visible = true;
        event.stopPropagation();
    }

    onResume(event: PIXI.InteractionEvent) {
        this.isPaused = false;
        this.pauseMenu.getView().visible = false;
        event.stopPropagation();
    }

    onRestart(event: PIXI.InteractionEvent) {
        this.pauseMenu.getView().visible = false;
        this.resultMenu.hide();
        this.onLevelSelected(this.selectedLevel);
        event.stopPropagation();
    }

    onReturnToMenu(event: PIXI.InteractionEvent) {
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

                const levelInfo = levelSet.levels[this.selectedLevel];
                const progress = this.gameRound.getProgress();
                if (progress > levelInfo.progress) {
                    levelInfo.progress = progress;
                    this.progressManager.save();
                }
            }
        }
    }

    private readonly progressManager: CProgressManager
    private readonly levelSelectionMenu: CLevelSelectionMenu;
    private readonly gameRound: CGameRoundView;
    private readonly pauseMenu: CPausePopUpMenu;
    private readonly resultMenu: CRoundResultPopUpMenu;
    private readonly physics: CWavesPhysics;

    private selectedLevel: number;
    private isPaused: boolean;
}

main();