
const width = 800;
const height = 600;

function main(): void {
    const app = new PIXI.Application({ width: width, height: height});
    document.body.appendChild(app.view);
}

main();