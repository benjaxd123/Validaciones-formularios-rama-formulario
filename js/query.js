$(document).ready(function () {
    function cargarImagenDePerro() {
        $.getJSON("https://dog.ceo/api/breeds/image/random", function (data) {
            if (data && data.status === "success") { 
                var imageUrl = data.message; 
                $("#imagen-perro").attr("src", imageUrl);
            } else {
                $("#error").text("Error al obtener la imagen del perro");
            }
        }).fail(function (jqxhr, textStatus, error) { 
            var err = textStatus + ", " + error;
            console.error("Error al cargar datos: " + err);
            $("#error").text("Error al cargar datos");
        });
    }

    cargarImagenDePerro();


    $("#boton-nueva-imagen").click(function () {
        cargarImagenDePerro(); 
    });
});