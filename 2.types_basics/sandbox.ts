// Todas estas variables quedan con un tipo asignado que ya no puede reemplazar

let character = 'mario'
let age = 30
let isBlackBelt = false

console.log(character)

// Podemos cambiar el contenido de la variable mas no el tipo
// character = 20 // Esto no
character = 'juan' // esto si
console.log(character)


age = 12
// age = '12' esto no

// Los parametros de las functiones deben ir con su tipo
const circ = (diameter: number) => {
  return diameter * Math.PI
}

console.log('circle diameter: ', circ(2))