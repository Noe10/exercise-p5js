const canvasWidth  = 1000;
const canvasHeight = 1000;

let gridSize = 25;

let cellSize = canvasWidth / gridSize;
let moveX = 4;
let moveY = 0;
let fr =1 ;

function cell(pX, pY) {

  pX = cellSize * pX;
  pY = cellSize * pY;
   
 
  rect(pX, pY, cellSize, cellSize);

}

function setup() {
  

  createCanvas(canvasWidth, canvasHeight);
  frameRate(fr);
}

function draw() {
  background(0);
 
  moveY++;
 
  frameRate(fr)
  
  cell(moveX, moveY);
  if(moveY == gridSize ){
    moveY = 0;
  }
  
}