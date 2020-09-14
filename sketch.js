
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 450, 70);
	ground = new Ground(width / 2, 670, width, 20);
	dustbinObj = new Dustbin(200, 650);
	launcherObject = new Launcher(paper.body, { x: 300, y: 300 });

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	paper.display();

	ground.display();
	launcherObject.display();
	dustbinObj.display();

	drawSprites();
}

function mouseDragged() {
	Matter.Body.setPosition(paper.body, { x: mouseX, y: mouseY })

}

function mouseReleased() {

	launcherObject.fly();

}


