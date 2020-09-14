/// <reference types="pixi.js" />

export class CBasePopUpMenu {

    constructor(
        title: string,
        width: number,
        height: number,
        buttonsOffset: number) {
        
        this.view = new PIXI.Container();

        const background = new PIXI.Graphics();
        background.beginFill(0x000000, 0.5);
        background.drawRect(-400, -300, 800, 600);
        background.endFill();

        background.lineStyle(10, 0xFFFFFF)
        background.beginFill(0x000000);
        background.drawRoundedRect(-width / 2, -height / 2, width, height, 20);
        background.endFill();

        background.interactive = true;
        background.on('pointerup', function(event: PIXI.InteractionEvent) {
            event.stopPropagation();
        });

        const name = new PIXI.Text(
            title, 
            {
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

    onContinueClick(fn: (event: PIXI.InteractionEvent) => void, context: any) {
        this.continueButton.on('pointerup', fn, context);
    }

    onRestartClick(fn: (event: PIXI.InteractionEvent) => void, context: any) {
        this.restartButton.on('pointerup', fn, context);
    }

    onMenuClick(fn: (event: PIXI.InteractionEvent) => void, context: any) {
        this.menuButton.on('pointerup', fn, context);
    }

    getView(): PIXI.Container {
        return this.view;
    }

    private readonly view: PIXI.Container;
    private readonly continueButton: PIXI.Sprite;
    private readonly restartButton: PIXI.Sprite;
    private readonly menuButton: PIXI.Sprite;
}