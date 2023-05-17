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
// GENERICS
// En TypeScript, los generics son una característica que permite crear código reutilizable que se puede usar con diferentes tipos
// La <T> captura cualquier elemento que le pasemos a la function, y captura ademas que propieades estan en el,
// en este caso como el parametro de entrada es un objeto, el generic <T> nos permitira saber que propiedades hay en ese objeto
// la letra puede ser cualquiera pero normalmente se usa T
// Los generics son útiles cuando se desea crear componentes o funciones que sean reutilizables y flexibles,
// ya que permiten adaptarse a diferentes tipos de datos sin tener que repetir el código. 
/*
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}
*/
/*
  function addUID<T>(obj: T): T {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
  }
 */
// el extends object basicamente le esta diciendo a esa function que el 
// parametro de entrada debe de ser un object
/*
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}
// let docTwo = addUID({ parent: { node: 1, name: 'node 1'}, color: 'black' })
// console.log('doc two again', docTwo.parent.name)
*/
// Podemos ser muy especificos sobre que tipo de argumentos debe de tener el objeto
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'armando', age: 40 });
console.log('doc one again', docOne.name);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'Three apples'
};
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: { stupid: 'people', weather: 'rain', message: 'come back' }
};
const docFive = {
    uid: 1,
    resourceName: 'person',
    data: ['apples', 'onions', 'beers']
};
console.log('doc three', docThree);
console.log('doc four', docFour);
console.log('doc five', docFive);
