const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	floor = new Floor(400,670,800,10); 
  paper = new Paper(150,650,20);
  
	Engine.run(engine);
  
}


function draw() {
  background(0);
  paper.display();
  floor.display();
  
}



