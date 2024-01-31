$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    
    $('form').on('submit',function(e){
        e.preventDefault();
        const TarefaNova = $('#nova-tarefa').val();
        const novoItem = $(`<li> ${TarefaNova}</li>`);
        $(TarefaNova).appendTo('novoItem');
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })

    $('ul').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
        
    })
})