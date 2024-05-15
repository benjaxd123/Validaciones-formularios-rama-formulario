
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var rut = document.getElementById("rut");
    var telefono = document.getElementById("telefono");
    var correo = document.getElementById("correo");
    var contraseña = document.getElementById("contraseña");
    var contraseña2 = document.getElementById("contraseña2");
    
    error.style.color = 'red';
    function validarRegistro() {
        console.log('Enviando formulario...')
    expresion = /\w+@\w+\.+[a-z]/;
        var mensajesError = []

    if (nombre.value === null || nombre.value === '' ||nombre.value.length > 30 || nombre.value.length < 4) {
        mensajesError.push("El nombre no es válido")
    }
    if (apellido.value === null || nombre.value === '' ||apellido.value.length > 30 || apellido.value.length < 4) {
        mensajesError.push("El apellido no es válido")
    }
    if (rut.value === null || rut.value === '' ||rut.value.length > 10 || rut.value.length < 9){
        mensajesError.push("Ingresa un rut valido")
    }
    if (telefono === null || telefono.value === ''||telefono.value.length > 10 || telefono.value.length < 9) {
        mensajesError.push("Ingresa un telefono valido")
    }
    if (isNaN(telefono)) {
        mensajesError.push("El telefono ingresado no es un número")
    }
    if (correo.value === null|| correo.value === ''||correo.value.length > 60 || correo.value.length < 10) {
        mensajesError.push("El correo no es válido")
    }
    if(!expresion.test(correo)){
        mensajesError.push("El correo no es válido")
    }
    if (contraseña.value === null|| contraseña.value === ''||contraseña.value.length > 30 || contraseña.value.length < 5) {
        mensajesError.push("La contraseña no es valida")
    }
    if (contraseña2.value === null|| contraseña2.value === ''||contraseña2 != contraseña) {
        mensajesError.push("Las contraseñas deben ser iguales")
    }
    error.innerHTML = mensajesError.join('');
    return mensajesError.length === 0;
}

function validarAdmin() {
    var usuario_admin, contraseña_admin;
    usuario_admin = document.getElementById("usuario_admin").value;
    contraseña_admin = document.getElementById("contraseña_admin").value;

    if(usuario_admin === "" || contraseña_admin === "" ) {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (usuario_admin.length > 20) {
        alert("El nombre de usuario es muy largo")
        return false;
    }
    else if (usuario_admin.length < 7) {
        alert("El nombre de usuario es muy corto")
        return false;
    }
    else if (contraseña_admin.length > 15) {
        alert("La contraseña es muy larga")
        return false;
    }
    else if (contraseña_admin.length < 7) {
        alert("La contraseña es muy corta")
        return false;
    }
}
function validarLogin() {
        var correo_cliente, contraseña_cliente, expresion2;
        correo_cliente = document.getElementById("correo_cliente").value;
        contraseña_cliente = document.getElementById("contraseña_cliente").value;

        expresion2 = /\w+@\w+\.+[a-z]/;

        if(correo_cliente === "" || contraseña_cliente === "" ) {
            alert("Todos los campos son obligatorios");
            return false;
        }

        if (correo_cliente.length > 60) {
            alert("El correo es muy largo")
            return false;
        }
        else if (contraseña_cliente.length > 25) {
            alert("La contraseña es muy larga")
            return false;
        }
        else if (contraseña_cliente.length < 5) {
            alert("La contraseña es muy corta")
            return false;
        }
        else if(!expresion2.test(correo_cliente)){
            alert("El correo no es válido")
            return false
        }

}