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
        doc = new Invoice(toFromField.value, toDetails.value, amountField.valueAsNumber);
    }
    else {
        doc = new Payment(toFromField.value, toDetails.value, amountField.valueAsNumber);
    }
    // console.log('type valuu', typeField.value)
    console.log(doc);
    list.render(doc, typeField.value, 'end');
});
// ENUMS
/**
 * En TypeScript, un enum (abreviatura de enumeración) es un tipo de dato que permite definir un conjunto de valores constantes
 * con nombres descriptivos. Los enums proporcionan una forma de representar un conjunto de opciones predefinidas, donde cada
 * opción tiene un nombre y un valor asociado.
 */
var ResourceType;
(function (ResourceType) {
    ResourceType["book"] = "BOOK";
    ResourceType["author"] = "AUTHOR";
    ResourceType["film"] = "FILM";
    ResourceType["director"] = "DIRECTOR";
    ResourceType["person"] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFour = {
    uid: 1,
    resourceName: ResourceType.person,
    data: { thing: 'people', weather: 'rain', message: 'come back' }
};
const docFive = {
    uid: 1,
    resourceName: ResourceType.author,
    data: ['apples', 'onions', 'beers']
};
console.log('doc four', docFour);
console.log('doc five', docFive);
