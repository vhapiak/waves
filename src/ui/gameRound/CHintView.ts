/// <reference types="pixi.js" />

import { HintInfo } from "../../levels/HintInfo";

export class CHintView {

    constructor(hintInfo: HintInfo) {
        const text = new PIXI.Text(hintInfo.description, {
            fill: '#ffffff',
            fontSize: 20,
            align: hintInfo.align
        });
        text.position.set(hintInfo.x, hintInfo.y);
        text.anchor.set(hintInfo.anchor.x, hintInfo.anchor.y);

        const graphics = new PIXI.Graphics();

        if(hintInfo.pointTo) {
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

    getView(): PIXI.Container {
        return this.view;
    }

    private readonly view: PIXI.Container;
}