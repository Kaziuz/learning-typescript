// Todas estas variables quedan con un valor asignado que ya no puede reemplazar
var character = 'mario';
var age = 30;
var isBlackBelt = false;
console.log(character);
// Podemos cambiar el contenido de la variable mas no el tipo
// character = 20 // Esto no
character = 'juan'; // esto si
console.log(character);
age = 12;
// age = '12' esto no
// Los parametros de las functiones deben ir con su tipo
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log('circle diameter: ', circ(2));
