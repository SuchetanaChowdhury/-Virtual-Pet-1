//Create variables here
var dog, dogImg;
var happyDog
var database
//var foodS
var foodStock
var foodRemaining;

function preload(){
 //load images here
 dogImg = loadImage("images/dogImg.png")
 dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
 createCanvas(500, 500);
 dog = createSprite(250, 250, 10, 10);
 dog.addImage("dog",dogImg);
 dog.addImage("happydog",dogHappy);
 dog.scale = 0.2;
 database = firebase.database();
 foodStock = database.ref('food');
 foodStock.on("value", readStock, showError);
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){ 
    dog.changeImage("happydog",dogHappy)
     foodRemaining=foodRemaining-1 
     writeStock(foodRemaining);
   } 
  if(keyWentUp(UP_ARROW)){
      dog.changeImage("dog",dogImg);
    }

 drawSprites();
 //add styles here
 textSize(14)
 fill(242, 231, 36);
 text("Note: Press UP_ARROW Key To Feed Drago Milk!!", 100, 20);
 text("Remaining food " + foodRemaining, 180, 180);

}

function writeStock(x){
  database.ref('/').update({
    "food":x
  })
}

function readStock(data){
  foodRemaining = data.val();
}

function showError(){
  console.log("there is in error in showing your data");
}