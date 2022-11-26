function descargarNuevosClientes() {
    return new Promise((resolve) => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarNuevosPedidos() {
    return new Promise((resolve) => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

//si queremos que sea secuencial
const app = async () => {
    try {
        const clientes = await descargarNuevosClientes();
        console.log(clientes);

        const pedidos = await descargarNuevosPedidos();
        console.log(pedidos);
    } catch (error) {
        console.log(error);
    }
};

//app();

//Si queremos que sea al tiempo (simuntaneo/sincronico)
const appSync = async () => {
    try {
        const result = await Promise.all([
            descargarNuevosClientes(),
            descargarNuevosPedidos(),
        ]);
        console.log(result[0]);
        console.log(result[1]);
    } catch (error) {
        console.log(error);
    }
};

appSync();
