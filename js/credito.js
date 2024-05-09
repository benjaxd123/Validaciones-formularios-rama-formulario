var numerotarjeta = document.getElementById('card-number');
var expiracion = document.getElementById('expiration');
var numerover = document.getElementById('cvv');
var nombrecompleto = document.getElementById('name');         
var error = document.getElementById('error');

error.style.color = 'red';

function formularioCredito(){
    console.log('Enviando formulario...')

    var mensajesError = [];

    if (numerotarjeta.value === ''|| numerotarjeta.value.length === 0){
        mensajesError.push('<p>Ingresa un numero de tarjeta valido</p> ')
    }

    if (expiracion.value === '' || expiracion.value.length === 0){
        mensajesError.push('<p>Ingresa una fecha de expiracion valida</p>')

    }

    var cvv = parseInt(numerover.value);
    if (isNaN(cvv) || cvv < 0) {
        mensajesError.push('<p>Ingresa un CVV válido</p>');
    }

    if (nombrecompleto.value === '' || nombrecompleto.value.length === 0){
        mensajesError.push('<p>Ingresa un nombre valido</p>')

    }


    error.innerHTML = mensajesError.join('');

    return mensajesError.length === 0;
}