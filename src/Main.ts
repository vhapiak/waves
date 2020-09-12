/// <reference types="pixi.js" />
/// <reference types="stats" />

import * as DropShader from './shaders/DropShader'
import * as DrawShader from './shaders/DrawShader'
import * as IterationShader from './shaders/IterationShader'
import * as VisualizationShader from './shaders/VisualizationShader'

const width = 600;
const height = 600;

type Vec2 = {
    x: number,
    y: number
}

type Color = {
    r: number,
    g: number,
    b: number,
    a: number
}

function drawDrop(
        app: PIXI.Application, 
        texture: PIXI.RenderTexture,
        position: Vec2,
        radius: number) {
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
    circle.position.set(position.x, position.y);

    // need to set only amplitude and velocity
    app.renderer.gl.colorMask(true, true, false, false);
    app.renderer.render(circle, texture, false);
    app.renderer.gl.colorMask(true, true, true, true);
}

function drawRectangle(
        app: PIXI.Application, 
        texture: PIXI.RenderTexture, 
        position: Vec2,
        size: Vec2,
        color: Color) {

    const geometry = new PIXI.Geometry()
    .addAttribute('aVertexPosition', 
        [position.x, position.y, 
         position.x + size.x, position.y, 
         position.x + size.x, position.y + size.y,
         position.x, position.y + size.y], 
        2)
    .addIndex([0, 1, 2, 0, 2, 3]);
    
    const program = PIXI.Program.from(DrawShader.vertex, DrawShader.fragment);

    const material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
        program: program,
        uniforms: {
            uColor: {
                x: color.r / 255,
                y: color.g / 255,
                width: color.b / 255,
                height: color.a / 255
            }
        }
    });
    const quad = new PIXI.Mesh(geometry, material);
    
    app.renderer.state.setBlend(false);
    app.renderer.render(quad, texture, false);
    app.renderer.state.setBlend(true);
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

function drawSensor(graphics: PIXI.Graphics, radius: number, activated: boolean) {
    graphics.clear();

    graphics.lineStyle(5, 0xffffff, activated ? 0.9 : 0.4);
    graphics.drawCircle(0, 0, radius);
}

function main(): void {

    const stats = new Stats();
    stats.showPanel(1); // ms
    document.body.appendChild(stats.dom);

    const app = new PIXI.Application({ width: width, height: height, transparent: true });
    document.body.appendChild(app.view);

    const firstBuffer = createBuffer(width, height, PIXI.FORMATS.RGBA, PIXI.TYPES.FLOAT);
    const secondBuffer = createBuffer(width, height, PIXI.FORMATS.RGBA, PIXI.TYPES.FLOAT);

    // set slight gradient damping on the edges to avoid reflactions   
    const offset = 40;
    for (let i = 0; i <= offset; ++i) {
        drawRectangle(app, firstBuffer, {x: i, y: i}, {x: width - 2 * i, y: height - 2 * i}, {r: 0, g: 0, b: 0xFF - offset + i, a: 0xFF});
    }

    // draw wall 
    drawRectangle(app, firstBuffer, {x: 300, y: 245}, {x: 10, y: 100}, {r: 0x00, g: 0, b: 0xFF, a:  0x00});

    const sensor = {
        x: 200,
        y: 250,
        r: 30
    }
    // drawSensorMask(app, sensorsMaskBuffer, sensor.x, sensor.y, sensor.r, 0.02, 1.0, 1);

    const quadGeometry = new PIXI.Geometry()
        .addAttribute('aVertexPosition', 
            [0, 0, 
             width, 0, 
             width, height,
             0, height], 
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
            uPixelStep: {
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

    const sensorGraphics = new PIXI.Graphics();
    drawSensor(sensorGraphics, sensor.r, false);
    sensorGraphics.position.set(sensor.x, sensor.y);
    app.stage.addChild(sensorGraphics);

    var webglPixels = new Float32Array(4 * 4 * sensor.r * sensor.r);
    app.ticker.add(function() {
        stats.begin();
        for (let i = 0; i < 1; ++i) {
            const tmp = offscreenBuffer;
            offscreenBuffer = shownBuffer;
            shownBuffer = tmp;

            iterationMaterial.texture = offscreenBuffer;
            app.renderer.render(iterationQuad, shownBuffer, true);
        }

        app.renderer.renderTexture.bind(shownBuffer);
        const gl = app.renderer.gl; 
        gl.readPixels(sensor.x - sensor.r, sensor.y - sensor.r, 2 * sensor.r, 2 * sensor.r, gl.RGBA, gl.FLOAT, webglPixels);
        
        const activated = (function(): boolean {
            const width = 2 * sensor.r;
            let max = -1.0;
            for (let y = 0; y < width; ++y) {
                for (let x = 0; x < width; ++x) {
                    const dx = sensor.r - x; 
                    const dy = sensor.r - y; 
                    const inCircle = (dx * dx + dy * dy <= sensor.r * sensor.r);

                    const index = (y * width + x) * 4;
                    if (inCircle && webglPixels[index] > max) {
                        max = webglPixels[index];
                    }
                }
            }
            // console.log(max);
            return max > 0.005;
        })();
        drawSensor(sensorGraphics, sensor.r, activated);

        stats.end();

        onscreenMaterial.texture = shownBuffer;
    });

    app.stage.interactive = true;
    app.stage.on('pointerup', pointerUp);

    function pointerUp(event: PIXI.InteractionEvent) {
        drawDrop(app, shownBuffer, event.data.global, 6.0);
    }
}

main();