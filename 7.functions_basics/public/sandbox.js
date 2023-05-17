"use strict";
// TIPOS DE FUNCTIONES
let greet;
// greet = 'hello' this is bad becouse gree its fuunction
greet = () => {
    console.log('sum:');
};
greet();
// Option 1
// cuando se añade un parametro a una funcion con un signo de interrogación ?
// le estamos diciendo a la function que ese parametro es opcional
const add = (a, b, c) => {
    console.log(a + b);
    console.log('value c', c);
};
// Option 2
add(2, 2);
// cuando se añade un parametro a una funcion con un valor por defecto
// no es necesario añadir el signo de ?, pues la function infiere
// que el parametro sigue siendo opcional pero ya tiene un valor por defecto
const add2 = (a, b, c = 10) => {
    console.log(a + b);
    console.log('default value', c);
};
add2(1, 3, '16');
// MUY IMPORTANTE: NO PODEMOS USAR OPTION1 OPTION2 AL MISMO TIEMPO
// LOS PARAMETROS OPCIONALES SIEMPRE PONERSE AL FINAL, COMO EN ESTE EJEMPLO ^
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// result = 'hol' this is bad becouse result its type number
console.log('result', result);
