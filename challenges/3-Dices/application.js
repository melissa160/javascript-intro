<<<<<<< HEAD
$(document).ready(function() {
	




//view
  function createDie(){
    $('.dice').append('<div class="die">0</div>');
  }

  function showNum(){
    return $(die).text(value)
  }

//model
  function rando(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    showNum();
  }



//controller

  function rollDie() {
    $('.die').each(rando);
  }
  
  $('#roller button.add').on('click', CreateDie);

  $('#roller button.roll').on('click', rollDie );








});
=======
// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     $('.dice').append('<div class="die">0</div>');
//   });
//
//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });

function Die(sides) {
  this.sides = sides
  this.value = 1
}
>>>>>>> upstream/master

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*this.sides)+1)
}

function Controller(view, model) {
  this.view = view
  this.model = model
}


Controller.prototype.plantEventListeners = function(addHandler, rollHandler) {
  $('#roller button.add').on('click', addHandler)
  $('#roller button.roll').on('click', rollHandler.bind(this))
}

Controller.prototype.rollAllDices = function() {
  var controller = this
  $('.die').each(function rollDie(k, htmlDie){
    controller.model.roll()
    controller.view.changeDieText(htmlDie, controller.model.value)
  })
}

Controller.prototype.init = function() {
  this.plantEventListeners(this.view.addDie, this.rollAllDices)
}

function View() {

}

View.prototype.addDie = function() {
  $('.dice').append('<div class="die">0</div>');
}

View.prototype.changeDieText = function(die, value) {
  $(die).text(value);
}

game = new Controller(new View(), new Die(6))
game.init()
