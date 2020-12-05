var car,zenia,torous,cyclap;
var wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);

  zenia = createSprite(50, 200, 50, 50);
  zenia.debug = true;
  //zenia.velocityX = -2;

  torous = createSprite(50, 200, 50, 50);
  torous.debug = true;
  //torous.velocityX = -2;

  cyclap = createSprite(50, 200, 50, 50);
  cyclap.debug = true;
  //cyclap.velocityX = -2;

  wall = createSprite(1500, 200 ,60, height/2);
  //wall.shapeColor(80,80,80);

  //speed = random(55,90)
  //weight = random(400,1500)
}

function draw() {
  background(255,255,255);
  
   //* if(wall.x - zenia.x < (zenia.width + wall.width)/2){
   //* zenia.velocityX = 0;
   //* var deformation = 0.5*50*50*1
  //*}

  //*if(deformation>180) {
   //*   zenia.shapeColor = color(255,0,0);
   //* }
  
  //*if(deformation < 180 && deformation > 100){
   //* zenia.shapeColor=color(230,230,0);
//*  }

 //* if(deformation<100){
  //*  zenia.shapeColor = color(0,255,0);
  }

 //drawSprites();
 
