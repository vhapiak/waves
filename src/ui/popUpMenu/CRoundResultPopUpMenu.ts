/// <reference types="pixi.js" />

import { CBasePopUpMenu } from "./CBasePopUpMenu";
import { LevelInfo } from "../../levels/LevelInfo";
import { CGameRoundView } from "../gameRound/CGameRoundView";
import { ELevelProgress } from "../../levels/ELevelProgress";

export class CRoundResultPopUpMenu extends CBasePopUpMenu {

    constructor(gameRound: CGameRoundView) {
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

    show(): void {
        this.view.visible = true;

        const progress = this.gameRound.getProgress();
        this.updateProgressView(0, progress, ELevelProgress.Played);
        this.updateProgressView(1, progress, ELevelProgress.Done);
        this.updateProgressView(2, progress, ELevelProgress.PerfectlyDone);
    }


    hide(): void {
        this.view.visible = false;
    }

    private updateProgressView(index: number, progress: ELevelProgress, threshold: ELevelProgress) {
        this.progressViews[index].alpha = progress >= threshold ? 1.0 : 0.4;
    }

    private readonly gameRound: CGameRoundView;
    private readonly progressViews: PIXI.Sprite[];
}