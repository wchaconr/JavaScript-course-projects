const paises = [];

const nuevoPais = (pais) =>
    new Promise((resolve) => {
        setTimeout(() => {
            paises.push(pais);
            resolve(`Agregado: ${pais}`);
        }, 3000);
    });

nuevoPais('Alemania')
    .then((result) => {
        console.log(result);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then((result) => {
        console.log(result);
        console.log(paises);
        return nuevoPais('Colombia');
    })
    .then((result) => {
        console.log(result);
        console.log(paises);
    });
