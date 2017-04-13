var trackLength = 10
var number = document.querySelector("#counter");
var player1 = ""
var player2 = ""
$(document).ready(function() {
  $('#start').on('click', function(event){
    players();
    countdown();
  });

  $('#restart').on('click', function(event){
    number.innerHTML = 3
    window.location.reload();
  });

  $(document).on('keyup', function(event) {
    //jugador 1
    if(event.keyCode == 81 && number.innerHTML==0){        
      pushForward("player1")
    }

    //jugador 2
    if(event.keyCode == 80 && number.innerHTML==0){
      pushForward("player2")
    }
  });
});

function players(){
  player1 = $("input[name='player1']").val() 
  player2 = $("input[name='player2']").val()
  if (player1 == ""){
    player1 = "player1"
  } 
  if(player2 == ""){
    player2 = "player2"
  }
  $('.player1').text(`${player1}`)
  $('.player2').text(`${player2}`)  
}
function pushForward(player){
    if ($(`#${player}_strip td:last-child`).hasClass("goal active")){
      var text = winnersName(player)
      $('.racer_table').text(text)
      // alert(`el ${player} gano`)
    }else{
      $(`#${player}_strip`).find('.active').removeClass("active").next().addClass("active");  
    }
}
function winnersName(player){
  var winnerText = ""
  if (player == "player1"){
    winnerText = `${player1} es el ganador!!`
  }
  else{
    winnerText = `${player2} es el ganador!!`
  }
  return winnerText
}

var update_countdown = function() {
    number.innerHTML -= 1;
    return number
  }

var countdown = function() {
    setTimeout(update_countdown, 1000);
    setTimeout(update_countdown, 2000);
    setTimeout(update_countdown, 3000);
}
