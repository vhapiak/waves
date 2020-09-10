/// <reference types="pixi.js" />

import * as DropShader from './shaders/DropShader'
import * as IterationShader from './shaders/IterationShader'
import * as VisualizationShader from './shaders/VisualizationShader'

const width = 600;
const height = 600;

function drawDrop(app: PIXI.Application, texture: PIXI.RenderTexture) {
    const radius = 6.0;
    const vertices = [
        0, 0,
        radius * Math.cos( 0 * Math.PI / 4), radius * Math.sin( 0 * Math.PI / 4),
        radius * Math.cos( 1 * Math.PI / 4), radius * Math.sin( 1 * Math.PI / 4),
        radius * Math.cos( 2 * Math.PI / 4), radius * Math.sin( 2 * Math.PI / 4),
        radius * Math.cos( 3 * Math.PI / 4), radius * Math.sin( 3 * Math.PI / 4),
        radius * Math.cos( 4 * Math.PI / 4), radius * Math.sin( 4 * Math.PI / 4),
        radius * Math.cos( 5 * Math.PI / 4), radius * Math.sin( 5 * Math.PI / 4),
        radius * Math.cos( 6 * Math.PI / 4), radius * Math.sin( 6 * Math.PI / 4),
        radius * Math.cos( 7 * Math.PI / 4), radius * Math.sin( 7 * Math.PI / 4),
        radius * Math.cos( 8 * Math.PI / 4), radius * Math.sin( 8 * Math.PI / 4)
    ];
    const colors = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const geometry = new PIXI.Geometry()
        .addAttribute('aVertexPosition', vertices, 2)
        .addAttribute('aVertexColorR', colors, 1);
    
    const program = PIXI.Program.from(DropShader.vertex,DropShader.fragment);

    const material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
        program: program
    });

    const circle = new PIXI.Mesh(geometry, material, null, PIXI.DRAW_MODES.TRIANGLE_FAN);
    circle.position.set(width / 2, height / 2);
    app.renderer.render(circle, texture);
}

function createBuffer(width: number, height: number, format: PIXI.FORMATS, type: PIXI.TYPES): PIXI.RenderTexture {
    const tex = new PIXI.BaseRenderTexture({
        width: width,
        height: height,
        scaleMode: PIXI.SCALE_MODES.NEAREST
    });
    tex.mipmap = PIXI.MIPMAP_MODES.OFF;
    tex.wrapMode = PIXI.WRAP_MODES.CLAMP;
    tex.format = format;
    tex.type = type;
    return new PIXI.RenderTexture(tex);
}

function main(): void {

    const app = new PIXI.Application({ width: width, height: height, transparent: true });
    document.body.appendChild(app.view);

    const firstBuffer = createBuffer(width, height, PIXI.FORMATS.RGBA, PIXI.TYPES.FLOAT);
    const secondBuffer = createBuffer(width, height, PIXI.FORMATS.RGBA, PIXI.TYPES.FLOAT);

    drawDrop(app, firstBuffer);

    // let extract = new PIXI.Extract(app.renderer);
    // let data = extract.pixels(firstBuffer);
    // console.log(data[4 * width * (height / 2) + 4 * width / 2] , data[4 * width * height / 2 + 4 * width / 2 + 1]);

    const quadGeometry = new PIXI.Geometry()
        .addAttribute('aVertexPosition', 
            [-1, 1, 
             1, 1, 
             1, -1,
             -1, -1], 
            2) 
        .addAttribute('aUvs', 
            [0, 0, 
             1, 0, 
             1, 1,
             0, 1], 
            2)
        .addIndex([0, 1, 2, 0, 2, 3]);

    const iterationProgram = PIXI.Program.from(IterationShader.vertex, IterationShader.fragment);

    const iterationMaterial = new PIXI.MeshMaterial(firstBuffer, {
        program: iterationProgram,
        uniforms: {
            "uPixelStep": {
                x: 1 / width,
                y: 1 / height
            }
        }
    });

    const iterationQuad = new PIXI.Mesh(quadGeometry, iterationMaterial);

    const onscreenProgram = PIXI.Program.from(VisualizationShader.vertex, VisualizationShader.fragment);

    let shownBuffer = firstBuffer;
    let offscreenBuffer = secondBuffer;

    const onscreenMaterial = new PIXI.MeshMaterial(shownBuffer, {
        program: onscreenProgram
    });

    const onscreenQuad = new PIXI.Mesh(quadGeometry, onscreenMaterial);
    app.stage.addChild(onscreenQuad);

    app.view.onclick = function() {
        console.time('iteration');
        for (let i = 0; i < 10; ++i) {
            const tmp = offscreenBuffer;
            offscreenBuffer = shownBuffer;
            shownBuffer = tmp;

            iterationMaterial.texture = offscreenBuffer;
            app.renderer.render(iterationQuad, shownBuffer, true);
        }
        console.timeEnd('iteration');

        // let extract = new PIXI.Extract(app.renderer);
        // let data = extract.pixels(shownBuffer);
        // console.log(data[4 * width * (height / 2) + 4 * width / 2] , data[4 * width * height / 2 + 4 * width / 2 + 1]);

        onscreenMaterial.texture = shownBuffer;

    }
}

main();