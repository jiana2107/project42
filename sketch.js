const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var boy,boyI;
var umbrella;
var thunder,thunderI;
var t1,t2,t3,t4;
var t1I,t2I,t3I,t4I;
var ground;
var drops=[];
var maxDrops=100;

function preload(){
    boyI=loadAnimation("walking_1.png",
    "walking_2.png","walking_3.png",
    "walking_4.png","walking_5.png",
    "walking_6.png","walking_7.png","walking_8.png")

    thunderI=loadAnimation("1.png","2.png","3.png","4.png")
    t1I=loadImage("1.png")
    t2I=loadImage("2.png")
    t3I=loadImage("3.png")
    t4I=loadImage("4.png")
}


function setup(){
   createCanvas(800,620)

   engine=Engine.create()
   world=engine.world;

   /*thunder=createSprite(550,100)
   thunder.addAnimation("thunder",thunderI)
   thunder.scale=0.5;*/

   boy=createSprite(550,450)
   boy.addAnimation("boyImage",boyI)
   boy.scale=0.5;

   ground=createSprite(400,620,800,7)
   World.add(world,ground)

   //umbrella=new Umbrella()

   if(frameCount%200==0){
    for(var i=0;i<maxDrops;i++){
     drops.push(new Drop(random(0,900),random(0,400)))
     //drops[i].update()
    }
    }

}


function draw(){
    background("black")
    Engine.update(engine)

    if(frameCount%80==0){
        var rand=Math.round(random(1,4))
        var thunder=createSprite(random(500,550),random(100,120))
        // var thunder=createSprite(500,100)

        switch(rand){
            case 1: thunder.addImage(t1I)
            thunder.scale=0.5;
            break;

            case 2: thunder.addImage(t2I)
            thunder.scale=0.5
            break;

            case 3: thunder.addImage(t3I)
            thunder.scale=0.5
            break;

            case 4: thunder.addImage(t4I)
            thunder.scale=0.5
            break;
                
            default:break;
        }

        thunder.lifetime=10;
        console.log(rand)
}

    for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
        }
    
    //umbrella.display()
    drawSprites()
}



