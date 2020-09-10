export const vertex = `
    precision mediump float;

    attribute vec2 aVertexPosition;
    attribute vec2 aUvs;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying vec2 vUvs;

    void main() {
        gl_Position = vec4(aVertexPosition, 0.0, 1.0);
        vUvs = aUvs;
    }
`;

export const fragment = `
    precision mediump float;

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

        gl_FragColor = vec4(value, velocity, 0.0, 1.0);
    }
`;