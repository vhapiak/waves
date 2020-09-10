export const vertex = `
    precision mediump float;

    attribute vec2 aVertexPosition;
    attribute vec2 aUvs;

    varying vec2 vUvs;

    void main() {
        gl_Position = vec4(aVertexPosition, 0.0, 1.0);
        vUvs = aUvs;
    }
`;

export const fragment = `
    precision mediump float;

    varying vec2 vUvs;

    uniform sampler2D uSampler; // sensors mask
    uniform sampler2D uState;
    
    const float step = 1.0 / 600.0;

    vec4 match() {
        for (float y = 0.0; y <= 1.0; y += step) {
            for (float x = 0.0; x <= 1.0; x += step) {
                highp vec4 value = texture2D(uState, vec2(x, y));
                highp vec4 mask = texture2D(uSampler, vec2(x, y));
                if (value.r >= mask.r && value.r <= mask.g && mask.b > 0.0) {
                    return vec4(1.0, x, y, value.r);
                }
            }
        }
        return vec4(0.0);
    }

    void main() {
        gl_FragColor = match();
    }
`;