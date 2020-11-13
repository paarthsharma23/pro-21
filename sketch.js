var wall , thickness
var speed , bullet , weight , damage ;
var deformtion;
function setup (){
createCanvas(1600,400);

wall=createSprite(1400,200,thickness,height/2);

bullet=createSprite(0,200,50,20);
bullet.velocityX=2;
bullet.shapeColor="red";

thickness = random(22,83);

speed = random(223,321);

weight = random(30,52);

damage=0.5*weight*speed*speed/3*thickness;

bullet.velocityX=speed;
}
function draw (){
background("lightblue");

if(wall.x-bullet.x<bullet.width/2+wall.width/2){
bullet.velocityX=0;
}

deformation=0.5*weight*speed*speed/thickness*thickness*thickness;

defomation();

drawSprites();

bullet.depth=wall.depth+1;

}




























defomation(){

    if(deformation<10){
        bullet.shapeColor="green";
    }else if(deformation>10){
        bullet.shapeColor="red";
    }
}