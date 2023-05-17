// FUNCTION SIGNATURES
// es una descripcion de los tipos de argumntos que la funcion toma y el tipo de valor que devuelve
// a su vez, esto nos permite especificar la estructura general de la function

// example 1
let greet:  (a: string, b:string) => void // this is the function signature
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

greet('alex', 'hi')

// example 2
let calc: (a:number, b:number, c:string) => number // this is the function signature
calc = (numOne: number, numTwo: number, action: string):number => {
    if (action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

const add = calc(2,2,'other')
console.log(add)

// example 3
let logDetails: (obj: {name: string, large: number}) => void
logDetails = (skate: {name: string, large: number }) => {
    console.log(`Skateboarding: ${skate.name} is large ${skate.large}`)
}

let typeTable = logDetails({name:'habitat',large:8})

console.log('type skateboarding: ', typeTable)



