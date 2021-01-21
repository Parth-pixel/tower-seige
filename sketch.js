const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var slngshot;
var polygon 

function preLoad(){
  
    polygon = loadImage("polygon.png");
}
function setup(){
    createCanvas(500,500);
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,250,400,10);
    block1 = new Box(330,235,30,40);
    block2 = new Box(360,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block5 = new Box(450,235,30,40);
    block6 = new Box(360,195,30,40);
    block7 = new Box(390,195,30,40);
    block8 = new Box(420,195,30,40);
    block9 = new Box(390,155,30,40);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot = new SlingShot(this.ball,{x:100, y:200});

}

function draw(){
    background("white");
    Engine.update(engine);
   
    
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block8.display();
    block7.display();
    block9.display();
    ellipseMode(CENTER);
    ellipse( ball.position.x,ball.position.y,40,40);
    //imageMode(CENTER);
   // image(polygon, ball.position.x,ball.position.y,40);
   slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x : mouseX, y : mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
