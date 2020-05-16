const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1//, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    pig = new Pig(790,320,220,120);
    box2 = new Box(750,320,20,20);
    pig1 = new Pig(810, 50);
 

    box3 = new Box(700,240,20,20);
   box4 = new Box(920,240,20,20);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,120,20,1,PI/-4);

   box5 = new Box(770,80,10,10);
    log4 = new Log(760,20,50);
    log5 = new Log(870,20,50);

    bird = new Bird(100,50);

    //log6 = new Log(230,180,80, PI/2);
   
   
    slingshot = new SlingShot(bird.body,{x:200, y:50});
   }


function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   pig.display();
   box2.display();
   ground.display();
    pig1.display();
  

    box3.display();
    box5.display();
    pig3.display();
    log3.display();

   box5.display();
   log4.display();
   log5.display();

    bird.display();
    platform.display();
   // log6.display();
   // slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}