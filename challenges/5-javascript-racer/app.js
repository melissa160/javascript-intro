$(document).ready(function() {
  var count1 = 0
  var count2 = 0
  var trackLength = 45
  $(document).on('keyup', function(event) {
    //jugador 1
    
    if(event.keyCode == 81){        
      if (count1 < trackLength-1 ){
        $($('#player1_strip td')[count1]).removeClass("active");
        $('#player1_strip').append("<td></td>")
        $($('#player1_strip td')[count1+1]).addClass("active");
        count1++;
      } else {
        console.log("el jugador 1 gano")
      }
    }

    //jugador 2
    if(event.keyCode == 80){
        if (count2 < trackLength-1 ){
        $($('#player2_strip td')[count2]).removeClass("active");
        $('#player2_strip').append("<td></td>")
        $($('#player2_strip td')[count2+1]).addClass("active");
        count2++;
      } else {
        console.log("el jugador 2 gano")
      } 
    }

  });
});