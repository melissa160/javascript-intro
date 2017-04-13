$(document).ready(function() {
  $('.post-container').on('click', '.vote-button', function(e){
  	e.preventDefault();

  	var url = this.href
    var button = this

  	var request = $.ajax({
  		method: "GET",
  		url: url
  	})
    request.done(function(response){
      $(button).parent().find('.points').html(response.votes)
      $(button).addClass("voted")
    })

  	// debugger
  })

  //adicionar post
  $('form').on('submit', function(event){
    event.preventDefault()
    var title = $(this).find('input[name="title"]').val()
    var url = this.action
    var data = $(this).serialize()

    $.ajax({
      method: "POST",
      url: url,
      data: data 
    }).done(function(response){
      console.log("en done")
      $('.post-container').append(response)
    }).fail(function(response){
      console.log("en error");
      console.log(response)
      alert(JSON.parse(response.responseText).msg[0])
      // console.log(response["msg"])
      // console.log($(response).parseJSON())

    })
  })


  $('.post-container').on('click', '.delete', function(event){
    var deleteSelect = this
    event.preventDefault()
    var url = this.href
    $.ajax({
      method: "DELETE",
      url: url,
    }).done(function(response){
      $(deleteSelect).closest('article').remove()
    }).fail(function(response){
      console.log("malo")
    })
  })
});
