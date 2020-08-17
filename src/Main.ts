/// <reference types="pixi.js" />

function main(): void {
    const width = 800;
    const height = 600;

    const app = new PIXI.Application({ width: width, height: height, transparent: true });
    document.body.appendChild(app.view);
}

main();