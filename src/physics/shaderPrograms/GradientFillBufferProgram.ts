export const vertexShader = `
    precision mediump float;

    attribute vec2 aVertex;
    attribute vec4 aColor;

    uniform mat3 translationMatrix; // name from pixi.js
    uniform mat3 projectionMatrix; // name from pixi.js

    varying vec4 vColor;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertex, 1.0)).xy, 0.0, 1.0);
        vColor = aColor;
    }
`;

export const fragmentShader = `
    precision mediump float;

    varying vec4 vColor;

    void main() {
        gl_FragColor = vColor;
    }
`;