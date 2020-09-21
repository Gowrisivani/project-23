var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true,friction:0});
	World.add(world, packageBody);
	
	box1body=Bodies.rectangle(200,20);
	box2body=Bodies.rectangle(20,100);
	box3body=Bodies.rectangle(200,20);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 635, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1=createSprite(400,650,200,20);
	 box1.shapeColor=color(255,0,0);
	 Matter.Body.setStatic(box1body,false);

	 box2=createSprite(300,610,20,100);
	 box2.shapeColor=color(255,0,0);
	 Matter.Body.setStatic(box2body,false);

	 box3=createSprite(500,610,20,100);
	 box3.shapeColor=color(255,0,0);
	 Matter.Body.setStatic(box3body,false);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



