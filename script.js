// Name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, text, mouseX, mouseY, 
          strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, pmouseX, pmouseY */

let brushHue, x, y, strokeSize;

function setup() {
  // Canvas & color settings
  strokeSize = 0
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(strokeSize);
  background(95);
  //x = mouseX 
  //y = mouseY
}

function draw() {
  setColors();
  if (mouseIsPressed){
    if (strokeSize < 20) {
      strokeSize = strokeSize + 1;
      strokeWeight(strokeSize);
    }
    //ellipse(mouseX, mouseY, 30) 
    line(pmouseX, pmouseY, mouseX, mouseY) 
    //mouseReleased(); 
    // if (!mouseIsPressed){
    //  while (strokeSize > 0){
    //    strokeSize = strokeSize - 1; 
    //    ellipse(mouseX, mouseY, 50)
    //    line(pmouseX, pmouseY, mouseX, mouseY)
    //  }
    //}
  }
  else{
    if (strokeSize > 0) {
      strokeSize = strokeSize - .5; 
      strokeWeight(strokeSize);
      line(pmouseX, pmouseY, mouseX, mouseY)  
    }
  }
  //if (strokeSize > 0){
    //strokeSize = strokeSize - .01; 
    //ellipse(mouseX, mouseY, 50)
    //line(pmouseX, pmouseY, mouseX, mouseY)
  //}
  //x = mouseX 
  //y = mouseY
  // rect(mouseX, mouseY, 15, 15);
  
}

function setColors() {
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
  
  brushHue++; 
  if (brushHue  >= 360) {
    brushHue = 0; 
  }
}

function keyPressed() {
  background(95); 
}

//function mousePressed(){
  //ellipse(mouseX, mouseY, 50)
//}

function mouseReleased() {
  //for (let i = strokeSize; i > 0; i--) {
  //  strokeWeight(i); 
  //  line(pmouseX, pmouseY, mouseX, mouseY); 
  //  ellipse(mouseX, mouseY, i)
  //}
  
  //if (strokeSize > 0){
  //  strokeSize = strokeSize - 1; 
  //  ellipse(mouseX, mouseY, strokeSize)
  //  line(pmouseX, pmouseY, mouseX, mouseY)
  //}
  //}
  //fade(10, 20)
}
