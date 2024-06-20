$(document).ready(function(){$("header button").click(function(){$("form").slideDown()}),$("#botao-cancelar").click(function(){$("form").slideUp()}),$("form").on("submit",function(e){e.preventDefault();var e=$("#endereco-imagem-nova").val(),a=$('<li style="display: none"></li>');$(`<img src="${e}" />`).appendTo(a),$(`
        <div class="overlay-imagem-link">
            <a href="${e}" target= "_blank" title="Ver imagem completa">
            Ver imagem completa
            </a>
        </div>`).appendTo(a),$(a).appendTo("ul"),$(a).fadeIn(500),$("#endereco-imagem-nova").val("")})});