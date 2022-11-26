const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// console.log(encabezado.innerText);
// console.log(encabezado.textContent);

document.querySelector('.contenido-hero h1').textContent = 'Hola mundo';

const imagen = document.querySelector('.card img');

imagen.src = 'img/hacer2.jpg';
