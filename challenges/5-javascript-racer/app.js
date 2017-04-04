$(document).ready(function() {

  $(document).on('keyup', function(event) {
    //jugador 1
    
    if(event.keyCode == 81){        
      count1 = pushForward(count1, "player1")
    }

    //jugador 2
    if(event.keyCode == 80){
      count2 = pushForward(count2, "player2")
    }
    console.log(count1)
    console.log(count2)

  });
});

var count1 = 0
var count2 = 0
var trackLength = 15

function pushForward(count, player){
  if (count < trackLength-1 ){
    $($(`#${player}_strip td`)[count]).toggleClass("active");
    $(`#${player}_strip`).append("<td class='active'></td>")
    count++;
  } else {
    console.log(`el ${player} gano`)
  }
  return count
}