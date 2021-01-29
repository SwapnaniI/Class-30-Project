const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7;
var ball8,ball9,ball10,ball11,ball12;
var ball13,ball14,ball15;
var ball16;
var stone;
var string;
var test;
function setup(){

createCanvas(800,800);

engine = Engine.create();
world = engine.world;

ground = new Ground(440,700,200,10);
//First Level

ball1 = new Ball(385,677,247, 110, 247);
ball2 = new Ball(403,677,247, 110, 247);
ball3 = new Ball(421,677,247, 110, 247);
ball4 = new Ball(440,677,247, 110, 247);
ball5 = new Ball(459,677,247, 110, 247);
ball6 = new Ball(479,677,247, 110, 247);
ball7 = new Ball(499,677,247, 110, 247);

//Second Level
ball8 = new Ball(405 , 643 , 128, 236, 19);
ball9 = new Ball(421 , 643 , 128, 236, 19);
ball10 = new Ball(440 , 643 , 128, 236, 19);
ball11 = new Ball(459  ,643 , 128, 236, 19);
ball12 = new Ball(479 , 643 , 128, 236, 19);

//Third Level
ball13 = new Ball(421 , 608.5 , 249, 140, 31);
ball14 = new Ball(440 , 608.5 , 249, 140, 31);
ball15 = new Ball(459  ,608.5 , 249, 140, 31);

//Fourth Level
ball16 = new Ball(440 , 575 , 85, 214, 246);

stone = new Stone(200,660);
string = new conString(stone.body,{x:200,y: 640})

test = 0;

}

function draw(){
Engine.update(engine);
background(64);

ground.display();

//First Level display
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();
ball7.display();


//Second Level Display
ball8.display();
ball9.display();
ball10.display();
ball11.display();
ball12.display();



//Third Level Display
ball13.display();
ball14.display();
ball15.display();


//Fourth Level Display
ball16.display();



stone.display();
string.display();

textSize(20)
fill(200)
noStroke();
text("Drag the hexagonal stone and release it",200,200);
text("Use the space key to reset it",200,250);


if(test === 1){
     stone.move();
}

if(keyCode === 32){
string.attach(stone.body)
}

}

function mouseDragged(){  
     Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})   
     test = 1;
}


function mouseReleased(){
     test = 0;
    string.fly();
    
    
 }

