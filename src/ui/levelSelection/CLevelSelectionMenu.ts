/// <reference types="pixi.js" />

import { CLevelsSetInfo } from "../../levels/CLevelsSetInfo"
import { CLevelItem } from "./CLevelItem"

export class CLevelSelectionMenu {
    constructor(levelsSetInfo: CLevelsSetInfo, listener: IOnLevelSelected) {
        this.container = new PIXI.Container();
        this.items = [];

        // todo calculate basing on app size
        const levelsInRow = 6;
        const offsetX = 75;
        const offsetY = 150;
        const itemWidth = 64 + 64;
        const itemHeight = 90 + 40;

        const levels = levelsSetInfo.getLevels();
        for (let i = 0; i < levels.length; ++i) {
            const level = levels[i];
            const item = new CLevelItem(level, i, listener);

            const col = i % levelsInRow;
            const row = Math.floor(i / levelsInRow);

            const view = item.getView();
            view.position.x = offsetX + itemWidth * col;
            view.position.y = offsetY + itemHeight * row;

            this.container.addChild(view);
            this.items.push(item);
        } 

        const name = new PIXI.Text(
            'Select Level',
            {
                fill: '#ffffff',
                fontSize: 46,
                fontWeight: 'bold'
            }
        );
        name.anchor.set(0.5);
        name.position.set(400, 50);
        this.container.addChild(name);
    }

    update(): void {
        for (let item of this.items) {
            item.update();
        }
    }

    getView(): PIXI.Container {
        return this.container;
    }

    private container: PIXI.Container;
    private items: CLevelItem[];
}