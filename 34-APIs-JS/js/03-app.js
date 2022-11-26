window.addEventListener('online', actializarEstado);
window.addEventListener('offline', actializarEstado);

function actializarEstado() {
    if (navigator.onLine) {
        console.log('Estas conectado');
    } else {
        console.log('No estas conectado');
    }
}
