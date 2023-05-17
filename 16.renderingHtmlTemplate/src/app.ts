import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/hasFormatter.js'
import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const typeField = document.querySelector('#type') as HTMLSelectElement
const toFromField = document.querySelector('#toFrom') as HTMLInputElement
const toDetails = document.querySelector('#details') as HTMLInputElement
const amountField = document.querySelector('#amount') as HTMLInputElement

// List template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)


// Add event listener fo ear submit event from click button
form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  /**
   * La interfaz 'HasFormatter' define el método 'format()', que tanto la clase 'Invoice'
   * como la clase 'Payment' implementan.
   * Asi que: aunque 'doc' se declara como tipo 'HasFormatter', se le puede asignar una instancia
   * de 'Payment' o 'Invoice' porque ambas clases implementan la interfaz 'HasFormatter'.
   * Entonces, las clases 'Invoice' y 'Payment' son consideradas subtipos de 'HasFormatter'
   * porque implementan el método format() definido en la interfaz 'HasFormatter'.
   */
  let doc: HasFormatter
  if (typeField.value === 'invoice') {
    doc = new Invoice(toFromField.value, toDetails.value, amountField.valueAsNumber)
  } else {
    doc = new Payment(toFromField.value, toDetails.value, amountField.valueAsNumber)
  }
  // console.log('type valuu', typeField.value)
  console.log(doc)
  list.render(doc, typeField.value, 'end')
})
 