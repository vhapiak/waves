import { levelSet } from "./levels/LevelSet";
import { CLevelSelectionMenu } from "./ui/levelSelection/CLevelSelectionMenu";
import { CWavesPhysics } from "./physics/CWavesPhysics";
import { CGameRoundView } from "./ui/gameRound/CGameRoundView";

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
        // app.stage.addChild(levelSelectionMenu.getView());

        const physics = new CWavesPhysics(app.renderer, width, height);
        const gameRound = new CGameRoundView(physics);
        app.stage.addChild(gameRound.getView());

        app.ticker.add(function() {
            physics.iterate();
            gameRound.update();
        });

        app.stage.interactive = true;
        app.stage.on('pointerup', function(event: PIXI.InteractionEvent) {
            physics.emitCircleWave(event.data.global.x, event.data.global.y, 6.0, 1.0);
        });
    }

    onLevelSelected(index: number): void {
        console.log('Selected level', index);
    }
}

main();