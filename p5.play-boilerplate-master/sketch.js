var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200,300, 50, 50);
  movingrect.shapeColor="red";
  movingrect.debug=true;

  fixedrect = createSprite(200,100,80,20);
  fixedrect.shapeColor="red";
  fixedrect.debug=true;

  movingrect.velocityY=-2;
  fixedrect.velocityY=2;
}

function draw() {
  background(0);  

  //movingrect.x=mouseX;
  //movingrect.y=mouseY;

  //if(movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2 && fixedrect.x - movingrect.x <= movingrect.width/2 + fixedrect.width/2 && movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2 && fixedrect.y - movingrect.y <= movingrect.height/2 + fixedrect.height/2){
    //movingrect.shapeColor='green'
    //fixedrect.shapeColor='green'
  //}

  //else{
    //movingrect.shapeColor='red'
    //fixedrect.shapeColor='red'
  //}
  if(movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2 && fixedrect.y - movingrect.y <= movingrect.height/2 + fixedrect.height/2){
    movingrect.velocityY=movingrect.velocityY*(-1);
    fixedrect.velocityY=fixedrect.velocityY*(-1);

  }
  if(movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2 && fixedrect.x - movingrect.x <= movingrect.width/2 + fixedrect.width/2){
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX=fixedrect.velocityX*(-1);
  }
  drawSprites();
}