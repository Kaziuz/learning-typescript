// DYNAMIC TYPES
// Este tipo de variable puede cambiar de dato o de tipado en el futuro
// Es decir, podria ser booleana al principio y luego comvertirse en un string

// ejemplo 1
let body: any = 25
body = true

console.log('any', body)
body = 'billion'
console.log('any', body)
body = ['amigos', 36]
console.log('any', body)
body = { car: 'kia', color: 'green'}
console.log('any', body)

let things: any[] = []

things.push('hungry')
things.push(1200)
things.push({ amigo: 2})

console.log('things', things)

let cards: { name: any, count: any }

cards = { name: ['volvo','ducaty'], count:'hay muchos carros: '}

console.log('cards',  cards)