/*
const perro = require('./animal');

const gato = require('./animal');

perro.nombre='perro';

gato.nombre='gato';
*/


const animal = require('./animal');
const perro= new animal;
const gato= new animal;
perro.nombre='perro';

gato.nombre='gato';

console.log(perro.nombre);
console.log(gato.nombre);

/*lo de un module export es como un return */ 