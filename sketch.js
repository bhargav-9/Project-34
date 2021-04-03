const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var gameState = "onSling";

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 400, y: 300 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box12 = new Box(600, 100, 70, 70);
  box13 = new Box(600, 100, 70, 70);
  box14 = new Box(600, 100, 70, 70);
  box15 = new Box(600, 100, 70, 70);
  box16 = new Box(600, 100, 70, 70);
  box17 = new Box(600, 100, 70, 70);
  boxes1 = new Box(700, 100, 70, 70);
  boxes2 = new Box(700, 100, 70, 70);
  boxes3 = new Box(700, 100, 70, 70);
  boxes4 = new Box(700, 100, 70, 70);
  boxes5 = new Box(700, 100, 70, 70);
  boxes6 = new Box(700, 100, 70, 70);
  boxes12 = new Box(800, 100, 70, 70);
  boxes13 = new Box(800, 100, 70, 70);
  boxes14 = new Box(800, 100, 70, 70);
  boxes15 = new Box(800, 100, 70, 70);
  boxes16 = new Box(800, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();
  boxes6.display();
  boxes12.display();
  boxes13.display();
  boxes14.display();
  boxes15.display();
  boxes16.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()

  hero.display();
  rope.display();
  monster.display();



}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  rope.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
       rope.attach(hero.body);
  }
}