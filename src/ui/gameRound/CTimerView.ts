/// <reference types="pixi.js" />


export class CTimerView {

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

    setExpectedTime(expectedTime: number) {
        this.expectedTimeView.text = '/ ' + this.formatTime(expectedTime) + ' s';
    }

    update(actualTime: number) {
        this.actualTimeView.text = this.formatTime(actualTime) + ' ';
    }

    getView(): PIXI.Container {
        return this.view;
    }

    private formatTime(iterations: number): string {
        const secondsInIteration = 1 / 60;
        const seconds = iterations * secondsInIteration;
        return (Math.round(seconds * 10) / 10).toString(10);
    }

    private view: PIXI.Container;
    private expectedTimeView: PIXI.Text;
    private actualTimeView: PIXI.Text;
}