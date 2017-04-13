(function(){
var tree=createTree();

$(document).ready(function() {
  $("button.plant").on("click", function(event){
    startGame();
  });
  $("button.reset").on("click", function(event){
    window.location.reload();
    startGame();
  });
  $("button.pick").on("click",function(event){
    $(".pick-text").toggle("hide")
    $(".pick-text").text("Click on the orange you want to harvest")
    setTimeout(function(){
      $(".pick-text").toggle("hide")
    }, 2500)
  });
  $("button.age").on("click", function(event){  
    tree.grow();
    if (tree.isAlive === false){
      $("#orange-tree-template").html(`The tree is more than ${MAX_AGE} years old, has died :(` )
    }
    render()
  });
})

function startGame(){
  $("#orange-tree-template").toggle("hide")
  $("button.reset").toggle("hide")
  $("button.plant").toggle("hide")  
}

function render(){
  $("p.age span").text(tree.age)
  $("p.fruit-count span").text(tree.orangeCount)
  $(".display-tree-big").html("")

  displayOranges();
  pickOrangeListener();  
}

function displayOranges(){
  tree.oranges.forEach(function(orange, index){  
    $(".display-tree-big").append(`<img id="${index}" class="orange" src="./app/images/naranja.png" style="height:${orange.diameter}px; width:${orange.diameter}px; left:${orange.position[0]}%; top:${orange.position[1]}% ">`)
  })
}

function pickOrangeListener(){
 $("img.orange").on("click", function(event){
  var index = $(this).attr("id")
  tree.dropOrange(index)
  render();
})  
}
})()