export const vertex = `
    precision mediump float;
    attribute vec2 aVertexPosition;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    }
`;

export const fragment = `
    precision mediump float;

    uniform float minValue;
    uniform float maxValue;
    uniform float id;

    void main() {
        gl_FragColor = vec4(minValue, maxValue, id, 1.0);
    }
`;