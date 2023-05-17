/**
 * MODIFICADORES DE ACCESO
 * Las palabras reservadas readonly, private and public se utilizan para especificar 
 * el nivel de acceso de los parametros de la clase
 * 1. READONLY: La palabra clave readonly se utiliza para indicar que una propiedad solo
 * puede ser leida mas no puede ser modificada una vez se ha inicializado.
 * 2. PRIVATE: EL modificador de acceso private se utiliza para especificar que una propiedad o 
 * método solo puede ser accedido dentro de la propia clase (leer y escribir), pero no se puede modificar después de la 
 * inicialización en el contructor
 * 3. PUBLIC: se puede usar en la clase como instanciada la clase, no impone restricciones
 */


/*
class Invoice {
  readonly client: string 
  private details: string 
  public amount: number 

  constructor(c:string, d:string, a:number) {
    this.client = c
    this.details = d
    this.amount = a
  }

  format () {
    return `${this.client} ç${this.amount} for ${this.details}`
  }
}
*/

// Forma abreviada de la clase comentada arriba
// para usar esta forma los parametros deben tener los atributos readonly, private and public
class Invoice {
  constructor (
    readonly client: string,
    private  details: string,
    public amount: number,
  ) {}

  format () {
    return `${this.client} ç${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('mario', 'work for mario website', 250)
const invTwo = new Invoice('luigi', 'work for luigi website', 150)

// console.log(invOne)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
  // inv.client = 'hola' thi is bad becouse client is readonly
  // console.log(inv.client, inv.details, inv.amount, inv.format())
  console.log(inv.client, inv.amount, inv.format())
})

// console.log('second time: ', invoices)

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
 