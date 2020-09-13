export const vertex = `
    precision mediump float;
    attribute vec2 aVertexPosition;
    attribute float aVertexColorR;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying float vRed;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
        vRed = aVertexColorR;
    }
`;

export const fragment = `
    precision mediump float;

    varying float vRed;

    void main() {
        gl_FragColor = vec4(vRed, 0.0, 1.0, 1.0);
    }
`;