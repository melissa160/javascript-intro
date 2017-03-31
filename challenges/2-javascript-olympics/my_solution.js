//  // U3.W7: JavaScript Olympics

// // Integrantes parejas: nombre1, nombre2


// // 0. Objetos
// var melissa = {name: "Melissa", height: "1.60", sport: "dancing"}
// var nicolas = {name: "Nicolas", height: "1.93", sport: "rugby"}

// //prueba


// // 1. Añadir propiedades a objetos


// function addProps(atletas, event){

//   atletas.forEach(function(atleta){
//     atleta.win = function (){
//       console.log(`${this.name} won the ${event}`);
//     }
//   })
// }

// // addProps([melissa, nicolas], "100 metros");
// // melissa.win();
// // nicolas.win();

// // 2. Voltea un String
// function flip(text){
//   var arr = text.split("");
//   return arr.reverse().join("");
// }

// var a = flip("melissa")
// //console.log(a);

// // 3. Remueve numeros impares
// function returnEvens(arr){
//   var evens = []
//   arr.forEach(function(number){
//     if (number%2 == 0){
//       evens.push(number);
//     }
//   })
//   return evens
// }

// var a = returnEvens([1,2,3,4,5,6,7,8,9,0])
// //console.log(a)

// 4. Funcion constructora

// function Athlete(name, age, sport){
//   this.name = name
//   this.age = age
//   this.sport = sport
// }

// var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
// console.log(michaelPhelps.constructor === Athlete)
// console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
// 5. Reflexion


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}
 assert((melissa.name === "Melissa"), "ok", "1.")
 assert((nicolas.name === "Nicolas"), "ok", "1.")