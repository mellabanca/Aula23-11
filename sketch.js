var caixa;

function setup() 
{
  createCanvas(400, 400);
  caixa = new Box(100,200,20,20,2);
}

function draw() 
{
  background(220);
  caixa.mostrar();
  caixa.mover();

}

