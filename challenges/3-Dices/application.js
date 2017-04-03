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





