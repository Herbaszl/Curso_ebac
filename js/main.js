$(document).ready(function(){
    $('#slides').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#campo-telefone').mask('(00) 00000-0000', {
        placeholder: '(**) *****-****'
    })
    $('#cep').mask('00000-000')
    $('#cpf').mask('000.000.000-00')

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            planoInteresse: {
                required: true
            },
            endereço: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.'
        
        },
        messages: {
            email: 'Por favor, insira um e-mail válido.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos inválidos.`)
            }
        }
    })
    $('.lista-planos button').click(function(){
        const destino = $('#contato');

        const nomePlano = $(this).parent().find('h3').text();

        $('#planoInteresse').val(nomePlano);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})




