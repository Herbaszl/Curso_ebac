$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
    })
})

$('button').click(function(){
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            telefone:{
                required: true
            },
        }
    })
})