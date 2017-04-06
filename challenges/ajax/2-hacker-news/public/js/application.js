$(document).ready(function() {
  $('.vote-button').on('click', function(e){
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


  $('.delete').on('click', function(event){
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
