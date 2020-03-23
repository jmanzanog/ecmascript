// ES8 incluye la trnasformacion de objetos en listas

const stack = {
    frontendDev: 'Jose Manzano',
    backendDev: 'Dago Manzano',
};

const entries = Object.entries(stack);
console.log(entries);
console.log(entries.length);

//Extraer  valores del objeto
const values = Object.values(stack);
console.log(values);

// agregar caraxteres al inicio o final de una cadena y conservando el numero de caracteres
const nombre = 'Jose Manzano';
console.log(nombre.padEnd(15, '++++++++++++++++++*****'));

// async y await con estas caracteristicas podemos esperar la respuesta de una funcion/promesa

const helloPromesa = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Hey'), 3000) : reject(new Error('Some wrong'));
    });
};
const helloAsync = async () => {
    const hello = await helloPromesa();
    console.log(hello);
};
helloAsync();
