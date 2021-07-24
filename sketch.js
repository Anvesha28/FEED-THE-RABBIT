 var garden,rabbit;
 var gardenImg,rabbitImg;
 var redObstacle, orangeObstacle, greenObstacle, foodObstacle;

 function preload(){
  gardenImage = loadImage("garden.png");
  rabbitImage = loadImage("rabbit.png");

  redObstacle = loadImage("redImage.png");
  greenObstacle = loadImage("leaf.png");
  orangeObstacle = loadImage("orangeLeaf.png");
  food = loadImage("apple.png");
 }

 function setup(){
  
  createCanvas(400,400);
  
 // Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImage);

 //creating boy running
 rabbit = createSprite(180,340,30,30);
 rabbit.addImage(rabbitImage);
 rabbit.scale =0.09;

 }


 function draw() {
  background(0);
  
  edges= createEdgeSprites();

  rabbit.x = mouseX
  rabbit.collide(edges);



  spawnObstacles();
  
  drawSprites();
 }
 
 function spawnObstacles(){
  if (frameCount % 80 === 0){
   obstacle = createSprite(100,1,10,10);
   var rand = Math.round(random(1,4));
   switch(rand){
    case 1 : obstacle.addImage(redObstacle);
    break;
    case 2 : obstacle.addImage(greenObstacle);
    break;
    case 3 : obstacle.addImage(orangeObstacle);
    break;
    case 4 : obstacle.addImage(food);
    break;
    }

    obstacle.velocityY = 4;
    obstacle.lifetime = 90;
    obstacle.scale =0.1;
   }
 }


