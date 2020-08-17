/// <reference types="pixi.js" />

const width = 800;
const height = 600;

function drawCircle(app: PIXI.Application, texture: PIXI.RenderTexture) {
    const radius = 10.0;
    const vertices = [
        0, 0,
        radius * Math.cos( 0 * Math.PI / 6), radius * Math.sin( 0 * Math.PI / 6),
        radius * Math.cos( 1 * Math.PI / 6), radius * Math.sin( 1 * Math.PI / 6),
        radius * Math.cos( 2 * Math.PI / 6), radius * Math.sin( 2 * Math.PI / 6),
        radius * Math.cos( 3 * Math.PI / 6), radius * Math.sin( 3 * Math.PI / 6),
        radius * Math.cos( 4 * Math.PI / 6), radius * Math.sin( 4 * Math.PI / 6),
        radius * Math.cos( 5 * Math.PI / 6), radius * Math.sin( 5 * Math.PI / 6),
        radius * Math.cos( 6 * Math.PI / 6), radius * Math.sin( 6 * Math.PI / 6),
        radius * Math.cos(-5 * Math.PI / 6), radius * Math.sin(-5 * Math.PI / 6),
        radius * Math.cos(-4 * Math.PI / 6), radius * Math.sin(-4 * Math.PI / 6),
        radius * Math.cos(-3 * Math.PI / 6), radius * Math.sin(-3 * Math.PI / 6),
        radius * Math.cos(-2 * Math.PI / 6), radius * Math.sin(-2 * Math.PI / 6),
        radius * Math.cos(-1 * Math.PI / 6), radius * Math.sin(-1 * Math.PI / 6),
        radius * Math.cos(-0 * Math.PI / 6), radius * Math.sin(-0 * Math.PI / 6),
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
    circle.position.set(400, 300);
    app.renderer.render(circle, texture)
}

function main(): void {

    const app = new PIXI.Application({ width: width, height: height, transparent: true });
    document.body.appendChild(app.view);

    const texture = PIXI.RenderTexture.create({width: width, height: height});
    drawCircle(app, texture);

    const geometry = new PIXI.Geometry()
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

    const program = PIXI.Program.from(`
        precision mediump float;
        attribute vec2 aVertexPosition;
        attribute vec2 aUvs;

        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;

        varying vec2 vUvs;

        void main() {
            gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
            vUvs = aUvs;
        }`,

        `precision mediump float;

        varying vec2 vUvs;
        uniform sampler2D uSampler;

        void main() {
            vec4 color = texture2D(uSampler, vUvs);
            gl_FragColor = vec4(color.r, 0.0, 0.0, 1.0);
        }`
    );

    const material = new PIXI.MeshMaterial(texture, {
        program: program
    });

    const quad = new PIXI.Mesh(geometry, material);
    app.stage.addChild(quad);
}

main();