const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';
    fetch(url)
        .then((respuesta) => {
            console.log(respuesta);
            console.log(respuesta.statusText);

            return respuesta.text();
        })
        .then((datos) => {
            console.log(datos);
        })
        .catch((error) => {
            console.error(error);
        });
}
