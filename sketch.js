var img = [];
var img2;
let button;
let number;
let k;
let w;
let lineOne;
let lineTwo;
let lineThree;
let buttonW;
let bx1;
let by1;
let bx2;
let by2;
let bx3;
let by3;
let bx4;
let by4;

function preload() {
  img2 = loadImage('pinterest.png');
  for (var i=0; i<65; i++) {
    img[i] = loadImage("img"+i+".jpg");
  }
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(730, 900);
  background(color(255, 255, 255));
  noCursor();

  if(windowWidth >= 700){
  w = windowWidth/4;
  buttonW = (w-20)/2;
  bx1 = 50;
  by1 = 30;
  bx2 = 250;
  by2 = 30;
  bx3 = 450;
  by3 = 30;
  bx4 = 650;
  by4 = 30;
  }
  if(windowWidth < 700){
  w = windowWidth/2;
  buttonW = (w-10)/2;
  bx1 = 50;
  by1 = 30;
  bx2 = 250;
  by2 = 30;
  bx3 = 50;
  by3 = 100;
  bx4 = 250;
  by4 = 100;
  }


  button = createButton("Dava Visualization");
  button.position(bx1, by1);
  button.size(buttonW,50);
  button.style("font-family","Poppins");
  button.style("background-color","#ffbf00");
  button.style("border-radius","5px");
  button.style("border-color","#ffbf00");
  button.style("color","#fff");
  button.mousePressed(DataViz);

  button = createButton("Graphic Design");
  button.position(bx2, by2);
  button.size(buttonW,50);
  button.style("font-family","Poppins");
  button.style("background-color","#ffbf00");
  button.style("border-radius","5px");
  button.style("border-color","#ffbf00");
  button.style("color","#fff");
  button.mousePressed(GraphicDesign);

  button = createButton("Installation");
  button.position(bx3, by3);
  button.size(buttonW,50);
  button.style("font-family","Poppins");
  button.style("background-color","#ffbf00");
  button.style("border-radius","5px");
  button.style("border-color","#ffbf00");
  button.style("color","#fff");
  button.mousePressed(Installation);

  button = createButton("UX Design");
  button.position(bx4, by4);
  button.size(buttonW,50);
  button.style("font-family","Poppins");
  button.style("background-color","#ffbf00");
  button.style("border-radius","5px");
  button.style("border-color","#ffbf00");
  button.style("color","#fff");
  button.mousePressed(UX);


  frameRate(30);
}


function DataViz(){
  k=1;
}

function GraphicDesign(){
  k=2;
}

function Installation(){
  k=3;
}

function UX(){
  k=4;
}



function draw() {
  image(img2, 0, 70, 730, 674)
  if(mouseIsPressed === true){
    if(mouseY > 100){
    if(k==1){
      let number = random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
    image(img[number], mouseX, mouseY, 20, img[number].height*20/img[number].width);
    }
    if(k==2){
      let number = random([25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]);
    image(img[number], mouseX, mouseY, 20, img[number].height*20/img[number].width);
    }
    if(k==3){
      let number = random([40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);
    image(img[number], mouseX, mouseY, 20, img[number].height*20/img[number].width);
    }
    if(k==4){
      let number = random([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]);
    image(img[number], mouseX, mouseY, 20, img[number].height*20/img[number].width);
    }
  }


  }
  }



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
