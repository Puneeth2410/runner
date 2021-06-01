
function preload(){
  //pre-load images
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;
  if(path.y> 400){
    path.y = heigth/2;
}
}
function setup(){
  createCanvas(400,400);
  //create sprites here
  runner=createSprite(200,200);
  runner.addImage(runnerImage)
}

function draw() {
  background(0);

}
