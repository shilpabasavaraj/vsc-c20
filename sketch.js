var car, wall, speed, weight;
function setup() {
createCanvas(1200,400);
car = createSprite(50, 200, 50, 50);
wall = createSprite(1150,200,20,200);
wall.shapeColor=("white");
speed = random(55,200);
weight = random(1250,400);
}

function draw() {
  background(0,0,0);  
 car.velocityX=speed;
 if(wall.x-car.x < (car.width+wall.width)){
   car.velocityX=0;
   var deformation = 0.5*weight*speed*speed/22509;
   if(deformation>180){
     car.shapeColor = color(255,0,0);
   }
   if(deformation<180 && deformation>100){
     car.shapeColor = color(230,230,0);
   }
   if(deformation<100){
     car.shapeColor = color(0,255,0);
   }
     
 } 
 drawSprites();
}