var img = [];
// var img2;


function preload() {
  // img2 = loadImage('JiawenXie.png');
  for (var i=0; i<25; i++) {
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
    let number = random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
    image(img[number], mouseX, mouseY, 20, img[number].height*20/img[number].width);
  }



}

function mousePressed() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
