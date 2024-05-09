
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var region = document.getElementById("region");
var comuna = document.getElementById("comuna");
var calle = document.getElementById("calle");
var direccion = document.getElementById("direccion");

error.style.color='red';
function validardireccion(){
var mensajesError=[];

if(nombre === '' || apellido === ''|| region === '' || comuna === '' || calle === '' || direccion === '' ) {
    mensajesError.push('Todos los campos son obligatorios');
}
if (nombre.value === null||nombre.value=== ''||nombre.value.length<3) {
    mensajesError.push('Ingrese un nombre valido')
}
if (apellido.value === null||apellido.value=== ''||apellido.value.length<3) {
    mensajesError.push('Ingrese un apellido valido')
}
if (region.value === null||region.value=== ''||region.value.length<3){
    mensajesError.push('Ingrese una region valida')
}
if(comuna.value === null||comuna.value=== ''||comuna.value.length<3){
    mensajesError.push('Ingrese una comuna valida')
}
if (calle.value=== null||calle.value===''||calle.value.length<3) {
    mensajesError.push('Ingrese una calle valida')
}
if (direccion.value=== null||direccion.value===''||direccion.value.length<3) {
    mensajesError.push('Ingrese una direccion valida')
}
error.innerhtml=mensajesError.join('');
return mensajesError.length===0;

}