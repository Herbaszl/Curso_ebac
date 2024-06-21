document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-dado').addEventListener('submit',function(evento){
        evento.preventDefault();
        let numeroDado = document.getElementById('numero-lados').value;
        numeroDado = parseInt(numeroDado);

        let numeroResultado = Math.random() * numeroDado;
        numeroResultado = Math.floor(numeroResultado + 1);

        document.getElementById('resultado-valor').innerText = numeroResultado;
        document.querySelector('.resultado').style.display = 'block';
    })
})