// a shader variable
let texShader;

function preload(){
  // load the shader
  texShader = loadShader('shader.vert', 'mandel.frag');
}

function setup() {
    // shaders require WEBGL mode to work
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

let translateMouseCoords = function (mx, my) {
    return {mouseX: -windowWidth/2 + mx, mouseY: -windowHeight/2 + my};  
}

function draw() {
    // shader() sets the active shader with our shader
    shader(texShader);

    texShader.setUniform('u_resolution', [width, height]);
    
    // rect gives us some geometry on the screen
    rect(0,0,width, height);
}

