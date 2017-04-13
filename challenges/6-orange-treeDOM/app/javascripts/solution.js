var FRUIT_BEARING_AGE = 3 
var MAX_AGE = 5

function Tree() {
  this.age = 0
  this.height = 0
  this.orangeCount = 0
  this.isAlive = true
  this.oranges = []
}

function createTree() {
  return new Tree()
}

Tree.prototype.grow = function(){
  this.age++
  this.height += 10
  this.oranges = []

  bearingAge.call(this)
  orangesQuantity.call(this)
  isAlive.call(this)
}

function bearingAge(){
  if (this.age >= FRUIT_BEARING_AGE ){
    this.orangeCount = randomm(5, 10)
  }  
}

function orangesQuantity(){
  for(var i=0; i< this.orangeCount; i++){
    this.oranges.push(new Orange())
  } 
}

function isAlive(){
  if (this.age > MAX_AGE ){
    this.isAlive = false
  }
}

function Orange(){
 this.diameter = randomm(5, 30)
 this.position = [randomm(10, 60), randomm(0, 70)]
}

function randomm(from, to){
  return Math.floor(Math.random()*to+from)
}
Tree.prototype.dropOrange = function(index){
  this.orangeCount -= 1
  return this.oranges.splice(index,1)
}

function pickOrange(){
  return new Orange()
}

