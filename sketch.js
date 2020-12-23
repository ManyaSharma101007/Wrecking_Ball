const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(400,height,800,20)

    box1 = new Box(450,550,100,100);
    box2 = new Box(450,450,100,100);
    box3 = new Box(450,350,100,100);
    box4 = new Box(450,250,100,100);

    box5 = new Box(550,550,100,100);
    box6 = new Box(550,450,100,100);
    box7 = new Box(550,350,100,100);
    box8 = new Box(550,250,100,100);

    ball = new Ball(250,350,50);
    s1 = new String(ball.body,{x : 250, y : 50});
}

function draw(){
    background(0)
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    ball.display();
    s1.display();
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}