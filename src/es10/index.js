// ES10 incluye flat como destructor de tipos

const array = [1, 1, 1, [1, 1, 1, [2, 2, 2], 1], 4, [3, 3, 3]];
console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flatMap(value => value + 1));

// trim para espacios
const hello = 'Hola e   ';
console.log(hello.trim());

// ahora ya no se necesita pasar eerro comomparametro en el catch

try {

} catch {
    console.error(error);
}

// fron arreglo a objeto
const arregloPerson = [['name', 'Jose'], ['edad', 27]];
console.log(Object.fromEntries(arregloPerson));
