var ground;
var jumpBox;

var boxVelX, boxVelY;


function setup() {
	createCanvas(displayWidth, displayHeight);

	//Create the Bodies Here.

	ground = createSprite(720,displayHeight,displayWidth+200,displayHeight/10);
	ground.shapeColor = "yellow";

    jumpBox = createSprite(200,500,50,50);
	jumpBox.shapeColor = "white";
	jumpBox.velocityY = 10;

	
	boxVelX = jumpBox.velocityX;
	boxVelY = jumpBox.velocityY;
}


function draw() {
  rectMode(CENTER);
  background(0);

  boxVelY = mouseY - jumpBox.y;
  boxVelX = mouseX - jumpBox.x;

  if(collide(ground,jumpBox)){
	jumpBox.setVelocity(0,0);
  } else{
	jumpBox.velocityY = jumpBox.velocityY + 0.9;  
  }

  if(keyDown("space") && jumpBox.y > 820){
	jumpBox.velocityY = -10;
  }

  if(keyDown(UP_ARROW) && jumpBox.y > 820){
	jumpBox.velocityY = -10;
  }

  if(keyDown(RIGHT_ARROW)){
	jumpBox.velocityX = 10
  }

  if(keyDown(LEFT_ARROW)){
	jumpBox.velocityX = -10
  }

  collide(ground,jumpBox);
  
  drawSprites();
}

function collide(sprite1,sprite2){
  if(sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2
      && sprite2.x - sprite1.x < sprite1.width/2 + sprite2.width/2
      && sprite1.y - sprite2.y < sprite1.height/2 + sprite2.height/2
      && sprite2.y - sprite1.y < sprite1.height/2 + sprite2.height/2){
          return true;
      }
      else{
          return false;
      }
}




