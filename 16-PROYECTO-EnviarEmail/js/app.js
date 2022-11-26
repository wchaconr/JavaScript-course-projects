const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

const inputemail = document.querySelector('#email');
const inputasunto = document.querySelector('#asunto');
const inputmensaje = document.querySelector('#mensaje');
const spinner = document.querySelector('#spinner');

const email = {
    email: '',
    asunto: '',
    mensaje: '',
};

eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
    inputemail.addEventListener('blur', validarFormulario); //blur es el evento de abandonar campo
    inputasunto.addEventListener('input', validarFormulario);
    inputmensaje.addEventListener('input', validarFormulario);
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function (e) {
        e.preventDefault();

        //reinicial el objeto
        resetFormulario();
    });
}

function enviarEmail(e) {
    e.preventDefault();
    spinner.classList.add('flex');
    spinner.classList.remove('hidden');
    setTimeout(() => {
        spinner.classList.add('hidden');
        spinner.classList.remove('flex');

        resetFormulario();

        //Alerta de resultado
        const alertaExito = document.createElement('P');
        alertaExito.classList.add(
            'bg-green-500',
            'text-white',
            'p-2',
            'text-center',
            'rounded-lg',
            'mt-10',
            'font-bold',
            'text-sm',
            'uppercase'
        );
        alertaExito.textContent = 'Mensaje enviado correctamente';
        formulario.appendChild(alertaExito);
        setTimeout(() => {
            alertaExito.remove();
        }, 3000);
    }, 3000);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {
    if (e.target.value.trim() === '') {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError(
            `*El ${e.target.id} es obligatorio`,
            e.target.parentElement
        );
        email[e.target.id] = '';
        comprobarFomularioLleno();
        return;
    } else {
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');

        clearAlert(e.target.parentElement); // elimina la alerta cuando ya no es necesaria
    }

    if (e.target.id === 'email' && !validateEmail(e.target.value)) {
        mostrarError(`El email no es válido`, e.target.parentElement);
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        email[e.target.id] = '';
        comprobarFomularioLleno();
        return;
    }

    //asignar valores al objeto
    email[e.target.id] = e.target.value.trim().toLowerCase();

    //comprobación del objeto
    comprobarFomularioLleno();
}

function mostrarError(mensaje, referencia) {
    clearAlert(referencia);

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add(
        'border',
        'border-red-500',
        'background-red-500',
        'text-red-500',
        'p-3',
        'mt-5',
        'text-center',
        'error'
    );

    referencia.appendChild(mensajeError);
}

function clearAlert(referencia) {
    const alerta = referencia.querySelector('.error');
    if (alerta) {
        alerta.remove();
    }
}

function validateEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const result = regex.test(email);
    return result;
}

function comprobarFomularioLleno() {
    if (Object.values(email).includes('')) {
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
        btnEnviar.disabled = true;
    } else {
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
        btnEnviar.disabled = false;
    }
}

function resetFormulario() {
    email.email = '';
    email.asunto = '';
    email.mensaje = '';

    formulario.reset();
    comprobarFomularioLleno();
}
