
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(100,370,200,20);
	bobObject2=new Bob(250,370,200,20);
	bobObject3=new Bob(400,370,200,20);
	bobObject4=new Bob(550,370,200,20);
	bobObject5=new Bob(6500,370,200,20);

	roofObject=new Roof(350,100,200,20);

	rope1=new Rope(bobObject1.body,roofObject.body,400,400);
	rope2=new Rope(bobObject1.body,roofObject.body,450,400);
	rope3=new Rope(bobObject1.body,roofObject.body,500,400);
	rope4=new Rope(bobObject1.body,roofObject.body,550,400);
	rope5=new Rope(bobObject1.body,roofObject.body,600,400);

    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
    roofObject.display();

	
  drawSprites();
 
}


function keyPressed(){
 
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:85,y:-85});
	
	}




}


