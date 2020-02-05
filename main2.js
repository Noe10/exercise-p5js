const canvasWidth  = 600;
const canvasHeight = 600;
let gridSize = 5;

let cellSize = canvasWidth / gridSize;

function cell(pX, pY) {

  pX = cellSize * pX;
  pY = cellSize * pY;

  rect(pX, pY, cellSize, cellSize);
}

function setup() {

  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(0);
  cell(3, 0);

}