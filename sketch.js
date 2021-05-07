const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
var box1;
var elmoImg;
var gameState = "onSling";
var rickRoll = new Audio('yt1s.com - Rick Astley  Never Gonna Give You Up Video - Copy.mp3')
function preload(){
elmoImg = loadImage("download.png");
}

function setup(){
    var canvas = createCanvas(3000,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1150,500,800,20)
    box1 = new Box(1300,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(800,100,70,70);
    box4 = new Box(1300,100,70,70);
    box5 = new Box(1300,100,70,70);
    box6 = new Box(1200,100,70,70);
    box7 = new Box(1400,100,70,70);
    box8 = new Box(1200,100,70,70);
    box9 = new Box(1200,100,70,70);
    box10 = new Box(1200,100,70,70);
    box11 = new Box(1500,100,70,70);
    box12 = new Box(1400,100,70,70);
    box13 = new Box(1200,100,70,70);
    box14 = new Box(1100,100,70,70);
    box15 = new Box(1100,100,70,70);
    box16 = new Box(1100,100,70,70);
    box17 = new Box(1100,100,70,70);
    box18 = new Box(1100,100,70,70);
    box19 = new Box(1000,100,70,70);  
    box20 = new Box(1000,100,70,70);
    box21 = new Box(1000,100,70,70);
    box22 = new Box(900,100,70,70);
   
    ball = new Ball(200,100,150,100);
    rope = new SlingShot(ball.body,{x:300,y:300})
 
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    ball.display();
    rope.display();
    ground.display();
    text("Pull and release polygon to knock over tower",20,500)
    text("Winners press 'CTRL'+'R'",20,550)
    text("Losers press 'SPACE'",20,600)
    text("Cheaters - Just Drag",20,650)

    text("Press play before starting",20,200)
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.fly();
}
function keyPressed(){
    if(keyCode === 32){

        Matter.Body.setPosition(ball.body,{x:500,y:50})
       rope.attach(ball.body);

    }
}
