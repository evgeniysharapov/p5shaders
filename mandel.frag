precision mediump float;

uniform vec2 u_resolution;

vec3 mandel(vec2 z0) {
    float k = 0.0;
    vec2 z = vec2(0.0);
    for(int i = 0; i < 420; ++i) {
        z = vec2(z.x*z.x-z.y*z.y, z.x*z.y*2.0) + z0;
        if (length(z) > 20.0) break;
        k += 1.0;
    }
    float mu = k + 1.0 - log2(log(length(z)));
    return sin(mu*0.1 + vec3(0.0,0.5,1.0));
}

void main() {
    float ar = u_resolution.x / u_resolution.y;
    vec2 uv = gl_FragCoord.xy / u_resolution.yy - vec2(0.66 * ar, 0.5);
    // uv = uv * 2.0 + vec2(-0.3, 0.0);
    float p = 30.0;
    float t = mod(13.0, p);
    if (t > p/2.0) t = p - t;
    float scale = 0.5 + pow(2.0, t);
    vec2 offset = vec2(-1.36799, .01);
    uv += offset*scale;
    uv /= scale;
    gl_FragColor = vec4(mandel(uv), 1.0);
}
