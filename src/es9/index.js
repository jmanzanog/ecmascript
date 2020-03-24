// ES9 incluye composition y extraccion de elementos de objeto

let person = {
    name: 'Jose',
    lastName: 'Manzano',
    age: 50
};

// imprimo el nombre y luego  lo demas
let {name, ...all} = person;
console.log(name, all);

// componer objeto a partir de otro
let person2 = {
    ...person,
    country: 'CO',
};
console.log(person2);

// finally en la promesa
const helloPromesa = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Hey'), 3000) : reject(new Error('Some wrong'));
    });
};
helloPromesa()
    .then(value => console.log(value))
    .catch(reason => console.log(reason))
    .finally(() => console.log('TERMINO'));


// regex
const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regex.exec('2020-03-22');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year,month,day);