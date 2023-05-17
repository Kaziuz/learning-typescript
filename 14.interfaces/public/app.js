// then, use interface person
const personArtist = {
    name: 'paula',
    age: 28,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`${this.name} spent`, amount);
        return amount;
    },
    profession: 'Musician'
};
console.log('person', personArtist);
personArtist.speak('hola alex');
personArtist.spend(345);
console.log(personArtist.profession);
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(personArtist);
// cuando estamos trabajando con ts es importante recordar que importamos archivos
// usando .js porque al final typescrit compila y produce .js
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 'work for mario website', 250);
const invTwo = new Invoice('luigi', 'work for luigi website', 150);
// console.log(invOne)
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // inv.client = 'hola' thi is bad becouse client is readonly
    // console.log(inv.client, inv.details, inv.amount, inv.format())
    console.log(inv.client, inv.amount, inv.format());
});
// console.log('second time: ', invoices)
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
