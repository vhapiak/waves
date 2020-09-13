export const vertexShader = `
    precision mediump float;

    attribute vec2 aVertex;
    attribute vec2 aUv;

    uniform mat3 translationMatrix; // name from pixi.js
    uniform mat3 projectionMatrix; // name from pixi.js

    varying vec2 vUv;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertex, 1.0)).xy, 0.0, 1.0);
        vUv = aUv;
    }
`;

export const fragmentShader = `
    precision mediump float;

    varying vec2 vUv;

    uniform sampler2D uSampler; // name from pixi.js
    uniform vec2 uPixelStep;

    float getN(vec2 offset) {
        vec2 uv = vUv + offset;
        vec4 col = texture2D(uSampler, uv);
        return col.r * col.a;
    }

    void main() {
        float top = getN(vec2(0.0, -uPixelStep.y));
        float bottom = getN(vec2(0.0, uPixelStep.y));
        float left = getN(vec2(-uPixelStep.x, 0.0));
        float right = getN(vec2(uPixelStep.x, 0.0));

        vec4 current = texture2D(uSampler, vUv);

        float acceleration = -0.25 * (current.r - top + current.r - bottom + current.r - left + current.r - right);
        float damping = current.b;
        float obstacle = current.a;
        float velocity = current.g * damping + acceleration * obstacle;
        float value = current.r + velocity;

        gl_FragColor = vec4(value, velocity, damping, obstacle);
    }
`;