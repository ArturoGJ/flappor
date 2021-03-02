let p1; // Pipe
let p2; // Second pipe
let p3; // third pipe
let f;
function setup() {
  createCanvas(540, 400);
  p1 = new Pipe();
  p2 = new Pipe(200);
  p3 = new Pipe(400);
  f = new Flappor();
}

function draw() {
  background(220);
  f.show();
  f.update();
  p1.show();
  p2.show();
  p3.show();
  p1.update();
  p2.update();
  p3.update();  
}

function keyPressed() {
  f.fly();
}