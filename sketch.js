
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(500,100,400,10)
	bobObject1 = new Bob(400,450,15)
	bobObject2 = new Bob(460,450,15)
	bobObject3 = new Bob(520,450,15)
	bobObject4 = new Bob(580,450,15)
	bobObject5 = new Bob(640,450,15)

	rope1 = new Rope(bobObject1.body,roof.body,-60*2,0)
	Engine.run(engine);
  
}


function draw() {
  
  background("white");

	roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rectMode(CENTER);
  drawSprites();
 
}



