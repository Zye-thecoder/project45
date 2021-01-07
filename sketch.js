var bgimg,bg
var bggimg,bg
var Im,jpg
function preload(){

  bgimg=loadImage('images/bg.jpg')
  bggimg=loadImage('images/bgg.jpg')
  lmimg=loadImage('images/lm.jpg')

}
function setup() {
  createCanvas(1700,800);
 goat=createSprite(650,300,50,50)
 goat.addImage("goat",bggimg)
 goat.scale=0.2
 moutain=createSprite(200,75,50,50)
 moutain.addImage("moutain",lmimg)
// Ground=createSprite(850,850,1700,20)


}

function draw() {
  background(bgimg);  

if (keyDown ('space')){
goat.velocityY=(-10)

}

//goat.collide(Ground)
  drawSprites();

}
function spawnmoutains() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     moutain = createSprite(200,100,40,10);
    moutain.y = Math.round(random(10,60));
    //moutain.addImage(cloudImage);
    moutain.scale = 0.2;
    moutain.velocityX = -1;
    
     //assign lifetime to the variable
    moutain.lifetime = 134;
    
    //adjust the depth
    //cloud.depth = trex.depth;
   // trex.depth = trex.depth + 1;
    
    //adding cloud to the group
 //moutainGroup.add(cloud);
    }
}


