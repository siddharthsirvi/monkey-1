
var monkey,monkeyImg
var banana,bananaImg
var jungle,jungleImg
var  stone,stoneImg
var invisibleGround
var score
var bananaGroup
var stone ,stoneImg
var stoneGroup

   


function preload(){
monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 bananaImg=loadImage("banana.png") ;
 jungleImg=loadImage("jungle.jpg");
  stoneImg=loadImage("stone.png")
}

function setup() {
  createCanvas(600, 600);
  jungle=createSprite(0,0,600,600);
  jungle.scale=1.5;
  jungle.addImage(jungleImg)
  jungle.velocityX=-3
  
  monkey=createSprite(50,430,10,10)
  monkey.addAnimation("running",monkeyImg)
  monkey.scale=0.2
  
    invisibleGround = createSprite(10,450,300,20);
  invisibleGround.visible = false;
  
  
  bananaGroup=new Group();
  stoneGroup=new Group();
}

function draw() {
  background(220);
  
 score = Math.round(frameCount/2);
  
  if (keyDown("space")){  
    monkey.velocityY=-10 
      
      }
 
  
  if (monkey.isTouching(bananaGroup)){
     score=score+1 
      
      }
    monkey.velocityY = monkey.velocityY + 0.8
  
  
if (jungle.x < 0){
      jungle.x = jungle.width/2;
    }
     
   monkey.collide(invisibleGround);    
  spawnstone();    
  spawnbanana();
  drawSprites();

 text("Score: "+ score, 500,50);
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var banana = createSprite(600,120,5,5);
    banana.y = Math.round(random(100, 250));
    banana.addImage(bananaImg);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
  
  
    banana.lifetime = 250;
    
    //adjust the depth
    banana  .depth = monkey.depth;
    monkey .depth = monkey.depth + 1;
    
    //add each cloud to the group
   bananaGroup.add(banana);
    
    
  }
}
  
function spawnstone() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var stone = createSprite(600,400,10,40);
    stone .x = Math.round(random(600,450 ));
    stone.addImage(stoneImg);
    stone.scale = 0.3;
    stone.velocityX = -3;
  
  
  
    
    stone.lifetime = 250;
    
    //adjust the depth
    
    stone .depth = monkey.depth;
    monkey .depth = monkey.depth + 1;
    
    //add each cloud to the group
   stoneGroup.add(stone);
  }
}
    
  