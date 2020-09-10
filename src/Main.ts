/// <reference types="pixi.js" />
/// <reference types="stats" />

import * as DropShader from './shaders/DropShader'
import * as SensorMaskShader from './shaders/SensorMaskShader'
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
    app.renderer.render(circle, texture, false);
}

type Vec2 = {
    x: number,
    y: number
}

function drawRectangle(
        app: PIXI.Application, 
        texture: PIXI.RenderTexture, 
        position: Vec2,
        size: Vec2,
        color: number) {

    const graphics = new PIXI.Graphics();

    graphics.beginFill(color, 1.0);
    graphics.drawRect(position.x, position.y, size.x, size.y);
    graphics.endFill();

    app.renderer.render(graphics, texture, false);
}


function drawSensorMask(
        app: PIXI.Application, 
        texture: PIXI.RenderTexture, 
        x: number, 
        y: number, 
        radius: number,
        minValue: number, 
        maxValue: number, 
        id: number) {
            
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

    const geometry = new PIXI.Geometry()
        .addAttribute('aVertexPosition', vertices, 2);
    
    const program = PIXI.Program.from(SensorMaskShader.vertex, SensorMaskShader.fragment);

    const material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
        program: program,
        uniforms: {
            minValue: minValue,
            maxValue: maxValue,
            id: id
        }
    });

    const circle = new PIXI.Mesh(geometry, material, null, PIXI.DRAW_MODES.TRIANGLE_FAN);
    circle.position.set(x, y);
    app.renderer.render(circle, texture, false);
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

    const stats = new Stats();
    stats.showPanel(1); // ms
    document.body.appendChild(stats.dom);

    const app = new PIXI.Application({ width: width, height: height, transparent: true });
    document.body.appendChild(app.view);

    const firstBuffer = createBuffer(width, height, PIXI.FORMATS.RGBA, PIXI.TYPES.FLOAT);
    const secondBuffer = createBuffer(width, height, PIXI.FORMATS.RGBA, PIXI.TYPES.FLOAT);

    // set slight gradient damping on the edges to avoid reflactions   
    const offset = 32;
    for (let i = 0; i <= offset; ++i) {
        drawRectangle(app, firstBuffer, {x: i, y: i}, {x: width - 2 * i, y: height - 2 * i}, 0x0000FF - offset + i);
    }
    drawDrop(app, firstBuffer);

    const sensor = {
        x: 250,
        y: 250,
        r: 30
    }
    const sensorsMaskBuffer = createBuffer(width, height, PIXI.FORMATS.RGBA, PIXI.TYPES.FLOAT);
    drawSensorMask(app, sensorsMaskBuffer, sensor.x, sensor.y, sensor.r, 0.02, 1.0, 1);

    const sensorsCheckBuffer = createBuffer(1, 1, PIXI.FORMATS.RGBA, PIXI.TYPES.UNSIGNED_BYTE);

    // let extract = new PIXI.Extract(app.renderer);
    // let data = extract.pixels(firstBuffer);
    // console.log(data[4 * width * (height / 2) + 4 * width / 2] , data[4 * width * height / 2 + 4 * width / 2 + 1]);

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
        program: onscreenProgram,
        uniforms: {
            uSensorsMask: sensorsMaskBuffer,
            uCheckResult: 0.0
        }
    });

    const onscreenQuad = new PIXI.Mesh(quadGeometry, onscreenMaterial);
    app.stage.addChild(onscreenQuad);

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
        
        onscreenMaterial.uniforms.uCheckResult = (function(): number {
            const width = 2 * sensor.r;
            for (let y = 0; y < width; ++y) {
                for (let x = 0; x < width; ++x) {
                    const index = (y * width + x) * 4;
                    if (webglPixels[index] > 0.05) {
                        return 1.0;
                    }
                }
            }
            return 0.0;
        })();

        stats.end();

        onscreenMaterial.texture = shownBuffer;
    });
}

main();