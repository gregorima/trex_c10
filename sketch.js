var trex, trex_running;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  ground = createSprite(200,180,400,20)
  ground.addImage(groundImage)
  ground.velocityX = -4

}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if (ground.x <0){
    ground.x = ground.width/2
  }
 //impedir que o trex caia
  trex.collide(ground)
  drawSprites();
}