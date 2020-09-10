/// <reference types="pixi.js" />

const width = 600;
const height = 600;

function drawCircle(app: PIXI.Application, texture: PIXI.RenderTexture) {
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
    
    const program = PIXI.Program.from(`
        precision mediump float;
        attribute vec2 aVertexPosition;
        attribute float aVertexColorR;

        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;

        varying float vRed;

        void main() {
            gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
            vRed = aVertexColorR;
        }`,

        `precision mediump float;

        varying float vRed;

        void main() {
            gl_FragColor = vec4(vRed, 0.0, 0.0, 1.0);
        }`
    );

    const material = new PIXI.MeshMaterial(PIXI.Texture.EMPTY, {
        program: program
    });

    const circle = new PIXI.Mesh(geometry, material, null, PIXI.DRAW_MODES.TRIANGLE_FAN);
    circle.position.set(width / 2, height / 2);
    app.renderer.render(circle, texture);
}

function main(): void {

    const app = new PIXI.Application({ width: width, height: height, transparent: true });
    document.body.appendChild(app.view);

    const tex1 = new PIXI.BaseRenderTexture({
        width: width,
        height: height,
        scaleMode: PIXI.SCALE_MODES.NEAREST
    });
    tex1.mipmap = PIXI.MIPMAP_MODES.OFF;
    tex1.wrapMode = PIXI.WRAP_MODES.CLAMP;
    tex1.format = PIXI.FORMATS.RGBA;
    tex1.type = PIXI.TYPES.FLOAT;
    const firstBuffer = new PIXI.RenderTexture(tex1);

    const tex2 = new PIXI.BaseRenderTexture({
        width: width,
        height: height,
        scaleMode: PIXI.SCALE_MODES.NEAREST
    });
    tex2.mipmap = PIXI.MIPMAP_MODES.OFF;
    tex2.wrapMode = PIXI.WRAP_MODES.CLAMP;
    tex2.format = PIXI.FORMATS.RGBA;
    tex2.type = PIXI.TYPES.FLOAT;
    tex2.update();
    const secondBuffer = new PIXI.RenderTexture(tex2);

    drawCircle(app, firstBuffer);

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

    const iterationProgram = PIXI.Program.from(`
        precision mediump float;
        attribute vec2 aVertexPosition;
        attribute vec2 aUvs;

        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;

        varying vec2 vUvs;

        void main() {
            gl_Position = vec4(aVertexPosition, 0.0, 1.0);
            vUvs = aUvs;
        }`,

        `precision mediump float;

        varying vec2 vUvs;

        uniform sampler2D uSampler;
        uniform vec2 uPixelStep;

        highp float getN(vec2 offset) {
            highp vec2 uv = vUvs + offset;
            highp vec4 col = texture2D(uSampler, uv);
            return col.r;
        }

        void main() {
            highp float top = getN(vec2(0.0, -uPixelStep.y));
            highp float bottom = getN(vec2(0.0, uPixelStep.y));
            highp float left = getN(vec2(-uPixelStep.x, 0.0));
            highp float right = getN(vec2(uPixelStep.x, 0.0));
            highp vec4 current = texture2D(uSampler, vUvs);

            highp float acceleration = -0.25 * (current.r - top + current.r - bottom + current.r - left + current.r - right);
            highp float velocity = current.g + acceleration;
            highp float value = current.r + velocity;

            // highp float mid = .25 * (top + bottom + left + right);
            // highp float velocity = 1.5 * (mid - current.r) + current.g * 1.0;
            // highp float value = current.r + velocity;

            gl_FragColor = vec4(value, velocity, 0.0, 1.0);
        }`
    );

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
    // app.renderer.render(iterationQuad, secondBuffer);

    const onscreenProgram = PIXI.Program.from(`
        precision mediump float;
        attribute vec2 aVertexPosition;
        attribute vec2 aUvs;

        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;

        varying vec2 vUvs;

        void main() {
            gl_Position = vec4(aVertexPosition, 0.0, 1.0);
            vUvs = aUvs;
        }`,

        `precision mediump float;

        varying vec2 vUvs;
        uniform sampler2D uSampler;

        void main() {
            vec4 color = texture2D(uSampler, vUvs);
            gl_FragColor = vec4(clamp(color.r * 20.0, 0.0, 1.0), 0.0, clamp(-color.r * 20.0, 0.0, 1.0), 1.0);
        }`
    );

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