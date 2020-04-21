//Objects for function bounceOff
var fixedRect, movingRect;

//Objects for function isTouching
var ob1, ob2, ob3, ob4;

function setup() {
  //Canvas
  createCanvas(1200,800);

  //Sprites for bouncingOff
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  //Sprites for isTouching
  ob1 = createSprite(100,300,50,50);
  ob2 = createSprite(200,300,50,50);
  ob3 = createSprite(300,300,50,50);
  ob4 = createSprite(400,300,50,50);
  ob1.shapeColor = "Blue";
  ob2.shapeColor = "Blue";
  ob3.shapeColor = "Blue";
  ob4.shapeColor = "Blue";

}

function draw() {
  background(0,0,0);  

  //Object mouse on mouseX and mouseY co-ordinates
  ob1.x = mouseX;
  ob1.y = mouseY;
 
  //BounceOff funciton
  BounceOff(fixedRect,movingRect);

  //Object moves 50 in right direction by touching
  if(isTouching(ob1, ob2)){
    ob2.x += 50;
  }
  
  drawSprites();
}

