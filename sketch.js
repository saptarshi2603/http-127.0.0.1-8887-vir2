//Create variables here
var dog,database, foodS, foodStock;
function preload()
{
  
dogImg=loadImage("Dog.png");
doghappy1=loadImage("happydog.png")

}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
 
  dog = createSprite(250,250,10,10);
  dog .addImage(dogImg)
  dog.scale = 0.15;

 
foodStock=database.ref('Food')
foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87) 
if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(doghappy1)
  }
  drawSprites();
  fill("black")
  textSize(26)
  text("I am tom.your virtual dog",150,20)
text("note:press up to feed Tom",30,400)

}
function readStock(data){

foodS=data.val()

}

function writeStock(x){

if(x<=0){
x=0;

}else{

  x=x-1;
}
database.ref('/').update({
Food:x
})

}

