const encabezado = document.querySelector('h1');
console.log(encabezado.style);

encabezado.style.backgroundColor = 'black';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nuevaClase', 'otraClase');
card.classList.remove('card');
console.log(card.classList);
