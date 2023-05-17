import { HasFormatter } from '../interfaces/hasFormatter.js'
/*
export class Invoice {
  constructor (
    readonly client: string,
    private  details: string,
    public amount: number,
  ) {}

  format () {
    return `${this.client} ç${this.amount} for ${this.details}`
  }
}
*/

/**
 * La palabra clave implements en Typescript se utiliza para indicar que una clase
 * implementa una interfaz especifica. Al utilizar implements, se esta asegurando que la
 * clase cumpla con los requisitos establecidos con la interfaz.
 * En este ejemplo, la clase Invoice implementa la interfaz HasFormatter usando la palabra 
 * clave implements. Esto quiere decir que la clase Invoice debe proporcionar
 * una implementacion del método format()
 * 
 * Al utilizar implements, se establece una relación entre la interfaz y la clase.
 * La clase debe cumplir con los requisitos de la interfaz, es decir, debe proporcionar
 * las propiedades y los métodos definidos en la interfaz, y asegurarse de que sean del tipo
 * correcto y devuelvan los valores adecuados.
 */

// clase
export class Invoice implements HasFormatter {
  constructor (
    readonly client: string,
    private  details: string,
    public amount: number,
  ) {}
  
  // Inside hasFormatter export: format(): string
  format () {
    return `${this.client} ç${this.amount} for ${this.details}`
  }
}