const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', getData);

function getData() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then((resolve) => resolve.json())
        .then((resolve) => showHTML(resolve));
}

function showHTML(data) {
    const contenido = document.querySelector('.contenido');
    let html = '';
    data.forEach((profileObj) => {
        const { author, post_url } = profileObj;
        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blanck">Ver imagen</a>
        `;
    });

    contenido.innerHTML = html;
}
