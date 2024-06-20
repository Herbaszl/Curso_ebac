$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit' , function(e){
        e.preventDefault();
        const enderecoImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagem}" />`).appendTo(novoItem);
        
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoImagem}" target= "_blank" title="Ver imagem completa">
            Ver imagem completa
            </a>
        </div>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereco-imagem-nova').val('');
    })
})