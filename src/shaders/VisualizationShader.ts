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
    uniform sampler2D uSensorsMask;
    uniform float uCheckResult;

    void main() {
        vec4 color = texture2D(uSampler, vUvs);
        vec4 sensors = texture2D(uSensorsMask, vUvs);
        gl_FragColor = vec4(
            clamp(color.r * 20.0, 0.0, 1.0), 
            0.5 * sensors.b * (1.0 + uCheckResult), // b - sensors id 
            clamp(-color.r * 20.0, 0.0, 1.0), 
            1.0);
    }
`;