import { levelSet } from "./levels/LevelSet";
import { CLevelSelectionMenu } from "./ui/levelSelection/CLevelSelectionMenu";

const width = 800;
const height = 600;

function main(): void {
    const app = new PIXI.Application({ width: width, height: height});
    document.body.appendChild(app.view);

    new CMain(app);
}

class CMain implements IOnLevelSelected {
    constructor(app: PIXI.Application) {
        const levelSelectionMenu = new CLevelSelectionMenu(levelSet, this);
        app.stage.addChild(levelSelectionMenu.getView());
    }

    onLevelSelected(index: number): void {
        console.log('Selected level', index);
    }
}

main();