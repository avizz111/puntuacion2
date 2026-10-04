function mostrarRespuestasAutos() {
    alert(`Modelo: ${document.getElementById("modelo").value}`);
    alert(`Color: ${document.getElementById("color").value}`);

    const foto = document.getElementById("foto").files[0];
    alert(`Foto: ${foto ? foto.name : "Sin archivo seleccionado"}`);

    const estadoActivo = document.getElementById("si").checked
        ? document.getElementById("si").value
        : document.getElementById("no").checked
            ? document.getElementById("no").value
            : "Sin seleccionar";
    alert(`Estado Activo: ${estadoActivo}`);
}

function mostrarRespuestasEscuderia() {
    alert(`Nombre: ${document.getElementById("nombre").value}`);
    alert(`Descripción: ${document.getElementById("descripcion").value}`);
}

function mostrarRespuestasCorredor() {
    alert(`Nombre: ${document.getElementById("nombre").value}`);
    alert(`Apellido Paterno: ${document.getElementById("apellidoP").value}`);
    alert(`Apellido Materno: ${document.getElementById("apellidoM").value}`);
    alert(`Edad: ${document.getElementById("edad").value}`);

    const genero = document.getElementById("masculino").checked
        ? document.getElementById("masculino").value
        : document.getElementById("femenino").checked
            ? document.getElementById("femenino").value
            : "Sin seleccionar";
    alert(`Género: ${genero}`);

    const foto = document.getElementById("foto").files[0];
    alert(`Foto: ${foto ? foto.name : "Sin archivo seleccionado"}`);
}

function mostrarRespuestasRelaciones() {
    alert(`Piloto: ${document.getElementById("pilotos-f1").selectedOptions[0].text}`);
    alert(`Escudería: ${document.getElementById("escuderia-f1").selectedOptions[0].text}`);
    alert(`Piloto principal: ${document.getElementById("pilotos-principales-f1").selectedOptions[0].text}`);
    alert(`Compañero: ${document.getElementById("pilotos-companero-f1").selectedOptions[0].text}`);
}