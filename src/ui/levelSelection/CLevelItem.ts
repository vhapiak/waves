/// <reference types="pixi.js" />

import { CLevelInfo } from "../../levels/CLevelInfo"
import { ELevelProgress } from "../../levels/ELevelProgress";

export class CLevelItem {
    constructor(levelInfo: CLevelInfo, index: number, listener: IOnLevelSelected) {
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

        const name = new PIXI.Text(
            levelInfo.getName(), 
            {
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

    getView(): PIXI.Container {
        return this.container;
    }

    update(): void {
        this.updateProgressView(0, ELevelProgress.Played);
        this.updateProgressView(1, ELevelProgress.Done);
        this.updateProgressView(2, ELevelProgress.PerfectlyDone);
    }

    private updateProgressView(index: number, threshold: ELevelProgress) {
        const progress = this.levelInfo.getProgress();
        this.progressViews[index].alpha = progress >= threshold ? 1.0 : 0.1;
    }

    private onSelection(): void {
        this.listener.onLevelSelected(this.index);
    }

    private readonly levelInfo: CLevelInfo;
    private readonly index: number;
    private readonly listener: IOnLevelSelected;

    private readonly container: PIXI.Container;
    private readonly progressViews: PIXI.Sprite[];
}