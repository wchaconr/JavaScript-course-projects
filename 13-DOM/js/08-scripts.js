const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes);
console.log(navegacion.children);

console.log(navegacion.children[2]);
console.log(navegacion.children[2].nodeName);

const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent =
    'nueve hading desde traversing the dom';

card.children[0].src = '/img/hacer3.jpg';
console.log(card.children[0]);

console.log(card.parentElement.parentElement.parentElement);

console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);

console.log(navegacion.firstElementChild);
