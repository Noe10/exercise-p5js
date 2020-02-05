let rectX = 0;
let fr ; //starting FPS
let clr;

function setup() {
  background(200);
  frameRate(fr); // Attempt to refresh at starting FPS

}

function draw() {
  background(200);
  rectX ++; // Move Rectangle

  if (rectX >= width) {
   // If you go off screen.
   
  
      fr = 90;
      frameRate(fr); // make frameRate 10 FPS
    
    rectX = 0;
  }
  
  rect(rectX, 40, 20, 20);
}