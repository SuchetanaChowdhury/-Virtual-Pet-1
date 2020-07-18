//Create variables here
var dog, dogImg;
var happyDog
var database
var foodS
var foodStock

function preload(){
 //load images here
 dogImg = loadImage("images/dogImg.png")
 dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
 createCanvas(500, 500);
 dog = createSprite(250, 250, 10, 10);
 dog.addImage("happy dog", dogImg);
 dog.scale = 0.2;
 database = firebase.database();
 foodStock = database.ref("ball/position");
 foodStock.on("value", readStock, showError);
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){
    Food = Food-1;
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
 drawSprites();
 //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

function showError(){
  console.log("there is in error in showing your data");
}



