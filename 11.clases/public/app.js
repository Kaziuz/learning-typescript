"use strict";
// clases
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} ç${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work for mario website', 250);
const invTwo = new Invoice('luigi', 'work for luigi website', 150);
console.log(invOne);
let invoices = [];
invOne.client = 'sofia';
console.log(invoices);
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// The Doom and type casting
// const anchor = document.querySelector('a')! // indicamos a typescript que estamos seguros que anchor no es null o undefined (non-null assertion operator)
// const anchorHref = anchor && anchor.href
// console.log(anchor.href)
// el as es un tipo de asercion en typescript (type assertion)
// en este caso: en la variable form le indica a typescript que el resultado de 
// de la función document.querySelector() es un elemento HTML de tipo HTMLFormElement,
// y no simplemente un elemento HTML genérico.
const form = document.querySelector('.new-item-form');
// Inputs
const typeField = document.querySelector('#type');
const toFromField = document.querySelector('#toFrom');
const toDetails = document.querySelector('#details');
const amountField = document.querySelector('#amount');
// Add event listener fo ear submit event from click button
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(typeField.value, toFromField.value, toDetails.value, amountField.valueAsNumber);
});
