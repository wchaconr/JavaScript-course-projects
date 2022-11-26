const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatosAsync);

function obtenerDatos() {
    fetch(url)
        .then((resolve) => resolve.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

//Este es el aspero
async function obtenerDatosAsync() {
    try {
        const result = await fetch(url);
        const resultado = await result.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
