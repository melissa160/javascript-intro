var trackLength = 10
var number = document.querySelector("#counter");

$(document).ready(function() {
  $('#start').on('click', function(event){
    countdown();
  });

  $('#restart').on('click', function(event){
    number.innerHTML = 3
    window.location.reload();
  });


  $(document).on('keyup', function(event) {
    //jugador 1
    console.log(number)
    if(event.keyCode == 81 && number.innerHTML==0){        
      pushForward("player1")
    }

    //jugador 2
    if(event.keyCode == 80 && number.innerHTML==0){
      pushForward("player2")
    }

  });
});


function pushForward(player){
  
  // if (count < trackLength-1 ){
    $(`#${player}_strip`).find('.active').removeClass("active").next().addClass("active");
    if ($(`#${player}_strip td:last-child`).hasClass("goal active")){
      alert(`el ${player} gano`)
    }

    // if ($(`#${player}_strip`).find('.goal') && $(`#${player}_strip`).find('.active')){
      // 
    // }
    // $(`#${player}_strip td`).next().addClass("active")
    // $($(`#${player}_strip td`)[count]).toggleClass("active");
    // $(`#${player}_strip`).append("<td class='active'></td>")
    // count++;
  // } else {
    console.log(`el ${player} gano`)
  // }
  // return count
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
