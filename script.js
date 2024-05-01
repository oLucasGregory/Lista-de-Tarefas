$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#terminar').click(function(){
        $('form').slideUp();
    })
})

$('form').on('submit', function(e){
   e.preventDefault();
   const novaTarefa = $('#nova-tarefa').val();
   const listaDeTarefas = $('<ul style= "display: none" ></ul>')
   $(`<li>${novaTarefa}</li>`).appendTo(listaDeTarefas);

   $(listaDeTarefas).appendTo('#lista');
   $(listaDeTarefas).fadeIn(1000)
   $('#nova-tarefa').val('')
   $('li').on('click', function(){
    $(this).addClass('linha-meio')
})
})
