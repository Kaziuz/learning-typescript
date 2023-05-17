// clases
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c:string, d:string, a:number) {
    this.client = c
    this.details = d
    this.amount = a
  }

  format () {
    return `${this.client} ç${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('mario', 'work for mario website', 250)
const invTwo = new Invoice('luigi', 'work for luigi website', 150)


console.log(invOne)

let invoices: Invoice[] = []

invOne.client = 'sofia'

console.log(invoices)
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

// The Doom and type casting
// const anchor = document.querySelector('a')! // indicamos a typescript que estamos seguros que anchor no es null o undefined (non-null assertion operator)
// const anchorHref = anchor && anchor.href
// console.log(anchor.href)

// el as es un tipo de asercion en typescript (type assertion)
// en este caso: en la variable form le indica a typescript que el resultado de 
// de la función document.querySelector() es un elemento HTML de tipo HTMLFormElement,
// y no simplemente un elemento HTML genérico.
const form = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const typeField = document.querySelector('#type') as HTMLSelectElement
const toFromField = document.querySelector('#toFrom') as HTMLInputElement
const toDetails = document.querySelector('#details') as HTMLInputElement
const amountField = document.querySelector('#amount') as HTMLInputElement


// Add event listener fo ear submit event from click button
form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(
        typeField.value,
        toFromField.value,
        toDetails.value,
        amountField.valueAsNumber
    )
})
 