const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var backgroundImg;
var stone;
var meteorites=[];
var slingshot;
var lifeline;
var exploding, losing;

function preload(){
backgroundImg = loadImage("images/park.png")
exploding = loadSound("explode.mp3")
losing = loadSound("lose.mp3")
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    stone = new Stone(200,height-135)
   ground = createSprite(width/2,height/2+20,width,height)
   ground.addImage(backgroundImg)
   ground.scale=1.4
   slingshot - new SlingShot(stone.body,{x:200,y:height-135})
}

function draw(){
    background(230);
    drawSprites()
    Engine.update(engine);
if(frameCount===50||frameCount%200===0){
    meteorites.push(new Meteorite(width-random(50,100),100))
   // meteorite.display()
}
for(x=0;x<meteorites.length;x++){
meteorites[x].display()
}
if(keyWentDown("space")){
exploding.play()
}
if(keyWentDown("a")){
    losing.play()
    }
    stone.display()
    
    slingshot.display()

}