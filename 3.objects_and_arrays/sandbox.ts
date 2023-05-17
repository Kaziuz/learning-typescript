// ARRAYS
let names = ['andrea', 'paula', 'laura']
names.push('camila') // this is fine
// names.push(3) this is bad beacuse names is arrays if string at i like pushing number value
// names[3] = 3 this is bad beacuse names is arrays if string at i like pushing number value
// names = 'hello' this is bad becouse names array is no assignable to string
// only add strings values to names arrays

let numbers = [10,20,50,67,10,45]
numbers.push(90) // This is fine
// numbers.push('45') this is bad becouse numbers array only accept numbers values
// numbers[1] = 'hi' this is bad becouse numbers array only accept numbers values


// This is fine becouse the mixed array is an a mix of various types of elements, includes string and numbers
let mixed = ['papa', 500, 'tomate', 1000, 'cebolla', 67, 'cat', 34]
mixed.push('perro')
mixed.push(3000)
mixed[0] = 3

console.log('names: ', names)
console.log('numbers: ', numbers)
console.log('mixed: ', mixed)

// OBJECTS
// Los campos dentro de los objetos funcionan igual que las variables
// Si un objeto al principio es declarado como objeto, o puede reasignarse despues

let pc = {
  name: 'Dell',
  color: 'Black',
  ram: '2 GB',
  price: 700
}

pc.price = 40
pc.name = 'Hp'
// pc.price = '400' this is bad

//IMPORTANT
// Es muy importante recordar que no podemos añadir propiedades adicionales al objeto una vez se haya definido la variable
// pc.version = '2034' version field not exit at pc object variable

// esto esta mal porque typescript me exije que pc sea igual al objeto original
// y  este de abajo le falta price
/*
pc = {
  name: 'Lenovo',
  color: 'aqua',
  ram: '4 GB',
  // price: 20
}
*/

console.log('pc', pc)