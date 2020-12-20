
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var stone1;
var gound1;
var tree1;
var mango1,mango2,mango3,mango4,mango5;
var lstone,lmango;
function preload()
{
	boy= loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	//boy = createSprite(100,675,50,50);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,690,800,5);
	stone1 = new Stone(boy.body,{x:100,y:675});
	tree1 = new Tree(670,500,100,100);
	mango1 = new Mango(675,480,20,20);
	mango2 = new Mango(690,510,20,20);
	mango3 = new Mango(660,500,20,20);
	mango4 = new Mango(680,520,20,20);
	mango5 = new Mango(700,505,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,20,340,200,300);
  

  drawSprites();
  ground1.display();
  stone1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  ango4.display();
  mango5.display();
 keypressed();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
}
function detectcollision(lstone,lmango){
mango.body.position = lmango.body.position;
stone1.body.position = lstone.body.position;

var distance = dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y);
if(distance<=lmango.r+lstone.r){
Matter.body.setStatic(lmango.body,false);	
}
}

function keypressed(){
	if(keyCode === 32){
Matter.body.setPosition(stone.body,{x:325,y:420});
launcherObject.attach(stone.body);
	}
}
