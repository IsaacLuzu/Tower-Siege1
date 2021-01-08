const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block11
var block12
var block13
var block14
var block15
var block16
var block17
var block18
var block19
var block20
var block21
var block22
var block23
var block24
var block25

var slingshot1

var stand1

var stand2

var ground1

var ball

function preload()
{}


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    
	block1 = new block(300,275,30,40)

	block2 = new block(330,275,30,40)

	block3 = new block(360,275,30,40)

	block4 = new block(390,275,30,40)

	block5 = new block(420,275,30,40)

	block6 = new block(450,275,30,40)

    block7 = new block(480,275,30,40)
    


	block8 = new block(330,235,30,40)

	block9 = new block(360,235,30,40)

	block10 = new block(390,235,30,40)

	block11 = new block(420,235,30,40)

    block12 = new block(450,235,30,40)

    
    block13 = new block(360,195,30,40)

    block14 = new block(390,195,30,40)

    block15 = new block(420,195,30,40)


    block16 = new block(390,155,30,40)


// second stand
    block17 = new block(400,500,30,40)

    block18 = new block(430,500,30,40)

    block19 = new block(460,500,30,40)

    block20 = new block(490,500,30,40)

    block21 = new block(520,500,30,40)


    block22 = new block(430,460,30,40)

    block23 = new block(460,460,30,40)

    block24 = new block(490,460,30,40)


    block25 = new block(460,420,30,40)


	slingshot1 = new slingshot(200,200)

    stand1 = new stand(400,270,200,5)
    
    stand2 = new stand(480,495,130,5)

	ground1 = new ground (400,100,750,5)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  block1.display();

  block2.display();

  block3.display();

  block4.display();

  block5.display();

  block6.display();

  block7.display();

  block8.display();

  block9.display();

  block10.display();

  block11.display();

  block12.display();

  block13.display();

  block14.display();

  block15.display();

  block16.display();

  block17.display();

  block18.display();

  block19.display();

  block20.display();

  block21.display();

  block22.display();

  block23.display();

  block24.display();

  block25.display();
  
  slingshot1.display();

  ground1.display();

  stand1.display();

  stand2.display();

  ball.display()

  drawSprites();
 
}

function mouseDrag(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})



}

function mouseRelease(){
slingshot.fly()



}