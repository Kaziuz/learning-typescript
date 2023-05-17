/*
  * 1. Register a list container (ul) in the constructor
  * 2. Create a render method to render a new 'li' to the container
  * --- accepts arguments: invoice or payment, a heading, a position
  * --- create a html template (li, h4, p)
  * --- add the 'li' template to the start/end of the list
*/

import { HasFormatter } from '../interfaces/hasFormatter'

export class ListTemplate {
  constructor(private container: HTMLUListElement){} // 1. Register a list container (ul) in the constructor

  render (item: HasFormatter, heading: string, pos: 'start' | 'end') {
    const li = document.createElement('li')

    const h4 = document.createElement('h4')
    h4.innerText = heading // set the content text html element h4
    li.append(h4) // add secondary elements to the end from parent element

    const p = document.createElement('p')
    p.innerText = item.format()
    
    li.append(p)

    if (pos === 'start') {
      this.container.prepend(li) // añadimos elementos al inicio
    } else {
      this.container.append(li)
    }
  }
}