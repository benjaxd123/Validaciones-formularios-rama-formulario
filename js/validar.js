function validarRegistro() {
    var nombre, apellido, rut, telefono, correo, contraseña, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    rut = document.getElementById("rut").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    contraseña = document.getElementById("contraseña").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellido === "" || rut === "" || telefono === "" || correo === "" ) {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length > 30) {
        alert("El nombre es muy largo")
        return false;
    }
    else if (apellido.length > 30) {
        alert("El apellido es muy largo")
        return false;
    }
    else if (rut.length > 10){
        alert("El rut es muy largo")
        return false;
    }
    else if (rut.length < 9) {
        alert("El rut es muy corto")
        return false;
    }
    else if (telefono.length > 10) {
        alert("El número de telefono es muy largo")
        return false;
    }
    else if (telefono.length < 9) {
        alert("El número de telefono es muy corto")
        return false;
    }
    else if (isNaN(telefono)) {
        alert("El telefono ingresado no es un número")
        return false;
    }
    else if (correo.length > 60) {
        alert("El correo es muy largo")
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo no es válido")
        return false
    }
    else if (contraseña.length > 30) {
        alert("La contraseña es muy larga max 30")
        return false;
    }
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