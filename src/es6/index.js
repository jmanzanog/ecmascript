// default parameters
function newFuntion(name = 'Jose', age = 25) {
    console.log(name, age)
}

newFuntion();
newFuntion('Dago', 29);

//interpolacion intead of concatenacion  con +
let hola = 'Hello';
let mundo = 'World';
let holaMundo = `${hola} ${mundo}`;
console.log(holaMundo);

// hacer saltos de linea y concervar el formto de un rexto con las comillas francesas en ES6
let lorem = `Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut.
 Venenatis urna cursus eget nunc scelerisque viverra mauris in.
  Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris.
   Sed cras ornare arcu dui vivamus arcu felis bibendum. 
   Urna neque viverra justo nec ultrices dui sapien eget. 
   Adipiscing bibendum est ultricies integer quis auctor elit.`;
console.log(lorem);

//dado un objeto puedo extraer sus atributos
let person = {
    name: 'Jose',
    age: 50
};
let {name, age} = person;
console.log(name, age);

//puedo unir varios arreglos con la siguuiente notacion
let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];
let lista3 = [...lista1, ...lista2, 11, 12, 13, 14, 15];
console.log(lista3);

// var tiene scope del archivo
// let tiene scope solo al bloque de codigo donde se declara
// const es inmutable


//una promesa es procesaciemto de algo que va a ocurrir, una promesa puede ser resuelta o rechazada
const helloPromesa = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey');
        } else {
            reject('Some wrong');
        }
    });
};
helloPromesa()
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));


// clases en EC6
class Operacion {
    constructor() {
        this.valor1 = 0;
        this.valor2 = 0;
    }

    suma(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        return this.valor1 + this.valor2;
    }
}

const oper = new Operacion();
const suma = oper.suma(3, 2);
console.log(`la suma es ${suma}`);

// importar un modulo
//import {sayHello} from "./modulo";
//sayHello('JOSE MANZANO');

// funcion generadora, va guardando los estados de los llamados especificados con la palabra yield
function* helloGenerator() {
    if (true) {
        yield 'hello ';
    }
    if (true) {
        yield 'Mundo.';
    }
};

const generator =  helloGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);