
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops=100;
var drops
var ground,yellow;
function preload(){
    
}

function setup(){

    engine = Engine.create();
	world = engine.world;
    createCanvas(800,800)
   
   //ground=createSprite(400,790,800,20);
   drops = new Drops (400,400,5);
   yellow = new Umbrella (400,600,200);

   Engine.run(engine);
}

function draw(){
    background(0)   

    //for(i=0; i<maxDrops; i++){
      // drops.push(new Drops(random(0,800),random(0,800)))
    //}

    

    drawSprites();
    drops.display();
    yellow.display()
}   

