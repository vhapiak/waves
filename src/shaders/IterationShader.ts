export const vertex = `
    precision mediump float;

    attribute vec2 aVertexPosition;
    attribute vec2 aUvs;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying vec2 vUvs;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
        vUvs = aUvs;
    }
`;

export const fragment = `
    precision mediump float;

    varying vec2 vUvs;

    uniform sampler2D uSampler;
    uniform vec2 uPixelStep;

    float getN(vec2 offset) {
        vec2 uv = vUvs + offset;
        vec4 col = texture2D(uSampler, uv);
        return col.r;
    }

    void main() {
        float top = getN(vec2(0.0, -uPixelStep.y));
        float bottom = getN(vec2(0.0, uPixelStep.y));
        float left = getN(vec2(-uPixelStep.x, 0.0));
        float right = getN(vec2(uPixelStep.x, 0.0));

        vec4 current = texture2D(uSampler, vUvs);

        float acceleration = -0.25 * (current.r - top + current.r - bottom + current.r - left + current.r - right);
        float velocity = current.g * current.b + acceleration;
        float value = current.r + velocity;

        gl_FragColor = vec4(value, velocity, current.b, current.a);
    }
`;