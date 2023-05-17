import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoice.js';
const form = document.querySelector('.new-item-form');
// Inputs
const typeField = document.querySelector('#type');
const toFromField = document.querySelector('#toFrom');
const toDetails = document.querySelector('#details');
const amountField = document.querySelector('#amount');
// Add event listener fo ear submit event from click button
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (typeField.value === 'invoice') {
        doc = new Invoice(toFromField.value, toDetails.value, amountField.valueAsNumber);
    }
    else {
        doc = new Payment(toFromField.value, toDetails.value, amountField.valueAsNumber);
    }
    console.log('type value', typeField.value);
    console.log(doc);
});
