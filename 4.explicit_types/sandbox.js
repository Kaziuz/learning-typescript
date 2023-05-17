// EXPLICIT TYPES
// Hasta aqui solo le estamos dando un type a la variable pero no un valor
var character; // solo en el futuro esta variable podra recibir un valor string
var age;
var isLoggedIn;
// age = 'amrie' this is bad because age its number
// isLoggedIn = 25 this si bad
age = 30; // this is good
isLoggedIn = true; // this is good
// ARRAYS
var ninjas = []; // es recomendable que cuando el array es un array vacio definirlo de esta manera
ninjas.push('fm-67');
console.log('ninjas', ninjas);
// UNION TYPES
// Nos permite almacenar diferentes tipos de datos en una misma variable
// ejemplo 1
var apple;
apple = 'red apple';
// console.log('apple up', apple)
apple = 5;
// console.log('apple down', apple)
// Ejemplo 2
function printSome(id) {
    console.log("ID: ".concat(id));
}
printSome('hola');
printSome(34);
// Ejemplo 3
var mixed = [];
mixed.push('hi');
mixed.push(345);
// mixed.push(false) this is bad
// console.log('mixed', mixed)
// OBJECTS
var car;
car = { name: 'chevrolet', price: 40000 };
console.log('car', car);
var animal;
animal = {
    name: 'chicken',
    paws: 2
};
console.log('animal', animal);
