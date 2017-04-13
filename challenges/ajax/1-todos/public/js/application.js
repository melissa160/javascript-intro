$(document).ready(function() {
  bindEvents();
});

function bindEvents() {
  // Enlaza los eventos que agregan, remuevan y completan TODOS a los elmentos del DOM indicados
  $('form.addTodo').on('submit', addTodo);
  $(".todo_list").on("click", "a.delete", deleteTodo);
  $('form.edit').on('submit', editTodo);

}

//HANDLEBAR
var source = $("#entry_template").html();
console.log(source)
var template = Handlebars.compile(source)
var persona = {
  "nombre": "hola",
  "como": "como",
}

function buildTodo(todoName) {
  // Eso nos ta un pedazo del DOM
  var todoTemplate = $.trim($('#todo_template').html());
  console.log(todoTemplate)
  // Creamos un elemento de jquery a partir del template
  var $todo = $(todoTemplate);
  // Modificamos el texto con el que nos pasen como argumento
  $todo.find('h2').text(todoName);
  // Devuelve el elemento de jquery para ser usado en otra parte.
  return $todo;
}

// Crea las funciones que añaden, remueven y completan TODOS. 
function addTodo(event){
  event.preventDefault()
  console.log("en add")
  var url = this.action
  var data = $(this).serialize()
  $.ajax({
    method: "POST",
    url: url,
    data: data,
  }).done(function(response){
    console.log(response)
    var todo = template(response)
    console.log(todo)  
    $("#todo_template").html(todo)
    // debugger
    // buildTodo(response.todo_template)    
    // $(".todo_list").append(todo)
  }).fail()
}

function deleteTodo(event){
  event.preventDefault()
  console.log("en delete")
  var deleteElement = this
  var url = deleteElement.href
  $.ajax({
    method: "DELETE",
    url: url,
  }).done(function(response){
    console.log(response)
    $(deleteElement).closest('article').remove()

  }).fail()
}

function editTodo(event){
  // event.preventDefault()
  console.log("en edit")
}




var html = template(persona)
$(".container").html(html)