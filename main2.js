const canvasWidth  = 1000;
const canvasHeight = 1000;

let gridSize = 25;

let cellSize = canvasWidth / gridSize;
let moveX = 8;
let moveY = 0;
let p2x = 8;
let p2y = 3;
let fr =1 ;

function cell(pX, pY) {

  pX = cellSize * pX;
  pY = cellSize * pY;
   
 
  rect(pX, pY, cellSize, cellSize);

}
function cell2(p2X, p2Y){
  p2X = cellSize * p2X;
  p2Y = cellSize * p2Y;
   
 
  rect(p2X, p2Y, cellSize, cellSize);
}

function setup() {


  createCanvas(canvasWidth, canvasHeight);
  frameRate(fr);
}

function draw() {
  background(0);
 
 cell2(p2x,p2y);

  moveY++;
 
  frameRate(fr)
  
  cell(moveX, moveY);

  if(moveY == p2y-1 && moveX == p2x){
    moveY--;
  }
  if(moveY == gridSize){
    moveY=0;
  }
  
}