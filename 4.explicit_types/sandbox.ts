// EXPLICIT TYPES
// Hasta aqui solo le estamos dando un type a la variable pero no un valor
let character: string // solo en el futuro esta variable podra recibir un valor string
let age: number
let isLoggedIn: boolean

// age = 'amrie' this is bad because age its number
// isLoggedIn = 25 this si bad

age = 30 // this is good
isLoggedIn = true // this is good

// ARRAYS
let ninjas: string[] = [] // es recomendable que cuando el array es un array vacio definirlo de esta manera
ninjas.push('fm-67')
console.log('ninjas', ninjas)

// UNION TYPES
// Nos permite almacenar diferentes tipos de datos en una misma variable
// ejemplo 1
let apple: string | number

apple = 'red apple'
// console.log('apple up', apple)
apple = 5
// console.log('apple down', apple)

// Ejemplo 2
function printSome(id: string | number) {
  console.log(`ID: ${id}`)
}
printSome('hola')
printSome(34)

// Ejemplo 3

let mixed: (string | number)[] = []
mixed.push('hi')
mixed.push(345)
// mixed.push(false) this is bad
// console.log('mixed', mixed)

// OBJECTS
let car: object
car = { name: 'chevrolet', price: 40000 }
console.log('car', car)

let animal: {
  name: string,
  paws: number
}

animal = {
  name: 'chicken',
  paws: 2
}

console.log('animal', animal)



