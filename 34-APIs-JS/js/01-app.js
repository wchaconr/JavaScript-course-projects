const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then((result) => {
        console.log('El resultado es ', result);
    });
});

const verNotificaciones = document.querySelector('#verNotificacion');

verNotificaciones.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Aprende mucho estos dos días',
        });

        notificacion.onclick = function () {
            window.open('https://www.youtube.com/watch?v=N5G8Ok4932s');
        };
    }
});
