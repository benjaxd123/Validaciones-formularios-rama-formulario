var nombrevar = document.getElementById('nombre');
var apellidovar = document.getElementById('apellido');
var regionvar = document.getElementById('region');
var comunavar = document.getElementById('comuna');         
var callevar = document.getElementById('calle');
var direccionvar = document.getElementById('direccion'); 


error.style.color = 'red';

function formularioDireccion(){
    console.log('Enviando formulario...')

    var mensajesError = [];

    if (nombrevar.value === null || nombre.value === ''){
        mensajesError.push('<p>Ingresa un nombre válido</p> ')
    }

    if (apellidovar.value === null || apellidovar.value === ''){
        mensajesError.push('<p>Ingresa apellido valido</p>')
    }

    if (regionvar.value === null || regionvar.value === ''){
        mensajesError.push('<p>Ingresa una region valida</p>')
    }

    if (comunavar.value === null || comunavar.value === ''){
        mensajesError.push('<p>Ingresa una comuna valida</p>')
    }

    if (callevar.value === null || callevar.value === ''){
        mensajesError.push('<p>Ingresa una calle valida</p>')
    }

    if (direccionvar.value === null || direccionvar.value === ''){
        mensajesError.push('<p>Ingresa una direccion valida</p>')
    }


    error.innerHTML = mensajesError.join('');

    return mensajesError.length === 0;
}