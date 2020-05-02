var img = [];
// var img2;


function preload() {
  // img2 = loadImage('JiawenXie.png');
  for (var i=0; i<5; i++) {
    img[i] = loadImage("img"+i+".jpg"); 
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noCursor();  
  frameRate(30);
}

function draw() {
  // image(img2, 0, 0, windowWidth, windowHeight);
  
  if(mouseIsPressed === true){
    let number = random([0, 1, 2, 3, 4]);
    image(img[number], mouseX, mouseY, 20, img[number].height*20/img[number].width);
  }

  
    
}

function mousePressed() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}