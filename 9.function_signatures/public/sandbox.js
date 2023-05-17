"use strict";
// FUNCTION SIGNATURES
// es una descripcion de los tipos de argumntos de que la funcion toma y el tipo de valor que devuelve
// a su vez, esto nos permite especificar la estructura general de la function
// example 1
let greet; // this is the function signature
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('alex', 'hi');
// example 2
let calc; // this is the function signature
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
const add = calc(2, 2, 'other');
console.log(add);
// example 3
let logDetails;
logDetails = (skate) => {
    console.log(`Skateboarding: ${skate.name} is large ${skate.large}`);
};
let typeTable = logDetails({ name: 'habitat', large: 8 });
console.log('type skateboarding: ', typeTable);
