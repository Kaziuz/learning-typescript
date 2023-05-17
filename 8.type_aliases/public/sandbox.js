"use strict";
// type aliases
// nos permite encapsular los tipos que vamos a usar en una function o en otras partes
// para evitar repetir codigo
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
/*
const greet = (user: {name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`)
}
*/
/*
const greet = (user: {name: string, uid: StringOrNumber }) => {
    console.log(`${user.name} says hello`)
}
*/
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
console.log(greet({ name: 'john', uid: 20 }));
console.log(logDetails('123123', 'papas'));
