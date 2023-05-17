import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// Inputs
const typeField = document.querySelector('#type');
const toFromField = document.querySelector('#toFrom');
const toDetails = document.querySelector('#details');
const amountField = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// Add event listener fo ear submit event from click button
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [toFromField.value, toDetails.value, amountField.valueAsNumber];
    /**
     * La interfaz 'HasFormatter' define el método 'format()', que tanto la clase 'Invoice'
     * como la clase 'Payment' implementan.
     * Asi que: aunque 'doc' se declara como tipo 'HasFormatter', se le puede asignar una instancia
     * de 'Payment' o 'Invoice' porque ambas clases implementan la interfaz 'HasFormatter'.
     * Entonces, las clases 'Invoice' y 'Payment' son consideradas subtipos de 'HasFormatter'
     * porque implementan el método format() definido en la interfaz 'HasFormatter'.
     */
    let doc;
    if (typeField.value === 'invoice') {
        // doc = new Invoice(toFromField.value, toDetails.value, amountField.valueAsNumber)
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // console.log('type valuu', typeField.value)
    console.log(doc);
    list.render(doc, typeField.value, 'end');
});
// TUPLES
/**
 * Un tuple (tupla en español) es un tipo de dato que permite definir una estructura de datos,
 * que contiene un número fijo de elementos, donde cada elemento puede ser de un tipo diferente. A diferencia de un array,
 * donde todos los elementos son del mismo tipo, un tuple permite especificar tipos distintos para cada elemento individual.
 */
let arr = ['juan', 30, true];
console.log(arr);
arr[0] = false;
arr[1] = 'alex';
arr[2] = false;
console.log('1 change: ', arr);
arr = [30, true, 'camila'];
console.log('change 2', arr);
// La principal diferencia del array y la tupla es que en la tupla cuando definimos un typo en cierta posicion
// entonces NO podemos cambiar ese tipo en esa posicion   
// Hay que definir la tupla explicitamente para que TS sepa que es un tupla, de lo contrario, inferia que es un array
let person;
// person = ['juan', '34', false]   // this is bad
person = ['juan', 34, false]; // this is good
// person[0] = false                // this is bad
person[0] = 'alex'; // this is good
console.log(person);
