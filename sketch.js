var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200, 600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  /*obj1 = createSprite(200, 400, 50, 80);
  obj1.shapeColor = "green";
  obj2 = createSprite(400, 400, 50, 80);
  obj2.shapeColor = "green";
  obj3= createSprite(600, 400, 50, 80);
  obj3.shapeColor = "green";
  obj4= createSprite(800, 400, 50, 80);
  obj4.shapeColor = "green";*/
}

function draw() {
  background(0,0,0);  
  /*movingRect.x=World.mouseX;
  movingRect.y = World. mouseY;

if(isTouching(movingRect,obj1)){
  movingRect.shapeColor = "blue";
  obj1.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  obj1.shapeColor = "green";
}*/
  bounce(movingRect,fixedRect);
  drawSprites();
}

