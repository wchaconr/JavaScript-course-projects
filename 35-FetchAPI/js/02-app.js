const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';

    fetch(url)
        .then((resolve) => {
            console.log(resolve);
            console.log(resolve.statusText);

            return resolve.json();
        })
        .then((resolve) => {
            showInHtml(resolve);
        });
}

function showInHtml({ empresa, id, nombre, trabajo }) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `<p>
    Empleado: ${nombre}
    ID: ${id}
    Empresa: ${empresa}
    Trabajo: ${trabajo}
    </p>`;
}
