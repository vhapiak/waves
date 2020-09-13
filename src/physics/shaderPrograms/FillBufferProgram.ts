export const vertexShader = `
    precision mediump float;

    attribute vec2 aVertex;

    uniform mat3 translationMatrix; // name from pixi.js
    uniform mat3 projectionMatrix; // name from pixi.js

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertex, 1.0)).xy, 0.0, 1.0);
    }
`;

export const fragmentShader = `
    precision mediump float;

    uniform vec4 uColor;

    void main() {
        gl_FragColor = uColor;
    }
`;