/// <reference types="pixi.js" />

import { EToolType } from "../../levels/EToolType";

export class CToolsSelectionView {

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
        this.positiveWave.on('pointerup', function(event: PIXI.InteractionEvent) {
            this.selectedTool = EToolType.PositiveWave;
            this.updateVisualization();
            event.stopPropagation();
        }, this);
        this.view.addChild(this.positiveWave);

        this.negativeWave = new PIXI.Sprite(PIXI.Texture.from('data/img/emitBlueWave.png'));
        this.negativeWave.anchor.set(0.5, 0.5);
        this.negativeWave.position.set(35, 0);
        this.negativeWave.interactive = true;
        this.negativeWave.buttonMode = true;
        this.negativeWave.on('pointerup', function(event: PIXI.InteractionEvent) {
            this.selectedTool = EToolType.NegativeWave;
            this.updateVisualization();
            event.stopPropagation();
        }, this);
        this.view.addChild(this.negativeWave);

        this.selectedFrame = new PIXI.Graphics();
        this.selectedFrame.lineStyle(2, 0xFFFFFF);
        this.selectedFrame.drawRoundedRect(-25, -25, 50, 50, 3);
        this.view.addChild(this.selectedFrame);

        this.selectedTool = EToolType.PositiveWave;
        this.updateVisualization();
    }

    setAvailableTools(tools: EToolType[]) {
        this.selectedTool = EToolType.PositiveWave;
        this.updateVisualization();
    }

    getSelectedTool(): EToolType {
        return this.selectedTool;
    }

    getView(): PIXI.Container {
        return this.view;
    }

    private updateVisualization() {
        if (this.selectedTool === EToolType.PositiveWave) {
            this.selectedFrame.position.set(-35, 0);
        } else {
            this.selectedFrame.position.set(35, 0);
        }
    }

    private readonly view: PIXI.Container;
    private readonly positiveWave: PIXI.Sprite;
    private readonly negativeWave: PIXI.Sprite;
    private readonly selectedFrame: PIXI.Graphics;

    private selectedTool: EToolType;
}