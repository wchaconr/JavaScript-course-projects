const enlace = document.createElement('a');

enlace.textContent = 'nuevo';

enlace.href = './nuevoEnlace';

enlace.classList.add('claseCualquiera');
//enlace.onclick = miFunction;

// para agregarlo al dom

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); // agrega al final
navegacion.insertBefore(enlace, navegacion.children[1]);

const parrafo1 = document.createElement('p');

parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Gorillaz';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
imagen.alt = 'Esto es una imagen';

const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

console.log(card);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
contenedor.insertBefore(card, contenedor.children[0]);
