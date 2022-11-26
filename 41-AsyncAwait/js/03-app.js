function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado se descargo correctamente');
            } else {
                reject('No se pudo realizar la operación');
            }
        }, 3000);
    });
}
// Async await

const ejecutar = async () => {
    try {
        const result = await descargarClientes();
        console.log(2 + 2);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

ejecutar();
