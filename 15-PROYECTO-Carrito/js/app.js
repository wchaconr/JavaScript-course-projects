const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEL();
function cargarEL() {
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Limpia el array (en el back, no en el html
        limpiarHTML(); // llamo la funcion para limpiar el carrito en el html
    });
}

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSelecionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSelecionado);
    }
}

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id'); // obtiene id del curso a eliminar
        // Elimina el curso del array (en el back, no en el html
        articulosCarrito = articulosCarrito.filter(
            (curso) => curso.id !== cursoId
        );
        carritoHTML(); // llamo la funcion para actualizar el carrito en el html
    }
}

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    };

    //revisa si el elemento ya se encu3entra en el carrito
    const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
    if (existe) {
        // si existe actualizamos la cantidad
        const cursos = articulosCarrito.map((curso) => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //retorna objeto con cantidad actualizada
            } else {
                return curso; //retorna ebjeto que no estan duplicados o no estan en el carrito
            }
        });
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso]; // con spredeOperator agrego los articulos a un array
    }

    console.log(articulosCarrito);
    carritoHTML();
}
function carritoHTML() {
    //limpiar HTML
    limpiarHTML();

    //recorre el carrito y agrega
    articulosCarrito.forEach((curso) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src='${curso.imagen}' width='100'></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a href='#' class='borrar-curso' data-id=${curso.id}> X </a></td>
        `;
        contenedorCarrito.appendChild(row);
    });
}

function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
