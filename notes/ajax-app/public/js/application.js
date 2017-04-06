$(document).ready(function() {

  $('.vote-button').on('click', function(e){
    // 1.Fresco yo estoy a cargo
    console.log('Estoy a cargo')
    e.preventDefault()

    // 2.Recopilar Informacion
    console.log('Informacion')
    var url = this.href
    var button = this

    // 3.Crear un request con AJAX
    console.log('Se crea el request')
    var request = $.ajax({
      method: "GET",
      url: url,
      data: {
        error: false
      }
    })

    // 4.Actualizar el DOM con la respuesta
    request.done(function(response){
      $(button).parent().find('.points').html(response.votes)
    })

    request.error(function(response){
      console.log('Errror')
      console.log(response)
      $('.post-container').html(JSON.parse(response.responseText).valor)
    })

  })

});
