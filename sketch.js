var movingRect,fixedRect;
var go1,go2,go3,go4

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100,100,50,80);
  fixedRect = createSprite(400,200,80,50);
  movingRect.shapeColor = "orange";
  fixedRect.shapeColor = "orange";
  go1 = createSprite(100,100,50,50)
  go2 = createSprite(200,100,50,50)
  go3 = createSprite(300,100,50,50)
  go4 = createSprite(400,100,50,50)
}

function draw() {
  background(0);
  go3.x = mouseX;
  go3.y = mouseY;    

 if (isTouching(go2,go3)) {
  go2.shapeColor = "clay";
  go3.shapeColor = "clay";
}else{
  go2.shapeColor = "orange";
  go3.shapeColor = "orange";
}

  drawSprites();
} 
