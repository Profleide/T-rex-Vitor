var box;

function setup() 
{
  createCanvas(400, 400);
  box = new Box(100,200,20,20,1); // chamando a nossa classe BOX pra detro do Sketch
}

function draw() 
{
  background(220);
  box.show();
  box.move();
}




