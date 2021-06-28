const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var snowimg
var santa
var santaImg
var boy,boy1
var snow,snowball;
function preload(){
snowimg = loadImage("snow3.jpg")
boy = loadImage("boy2.PNG")
santaImg=loadImage("bg.PNG")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

   
santa = createSprite(350,170,40,30);
santa.addImage("hh",santaImg);
santa.scale=0.2
 
boy1 = createSprite(750,170,40,30);
  boy1.addImage("hh",boy);
  boy1.scale=0.2
   
  
  
 
}

function draw() {
  background(snowimg);  
  imageMode(CENTER)
  
  drawSprites();
}

