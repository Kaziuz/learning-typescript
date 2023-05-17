import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/hasFormatter.js'
import { Invoice } from './classes/Invoice.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const typeField = document.querySelector('#type') as HTMLSelectElement
const toFromField = document.querySelector('#toFrom') as HTMLInputElement
const toDetails = document.querySelector('#details') as HTMLInputElement
const amountField = document.querySelector('#amount') as HTMLInputElement

// Add event listener fo ear submit event from click button
form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter
  if (typeField.value === 'invoice') {
    doc = new Invoice(toFromField.value, toDetails.value, amountField.valueAsNumber)
  } else {
    doc = new Payment(toFromField.value, toDetails.value, amountField.valueAsNumber)
  }
  console.log('type value', typeField.value)

  console.log(doc)
})
 