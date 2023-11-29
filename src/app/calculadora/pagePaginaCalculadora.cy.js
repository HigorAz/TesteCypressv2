import React from 'react'
import PaginaCalculadora from './page'
 
describe('<PaginaCalculadora />', () => {
  it('renders', () => {    
    cy.mount(<PaginaCalculadora />)
    cy.get("#campo1").type("3")
    cy.get("#campo2").type("3")
    cy.get("#botaoCalcular").click()
 
    cy.get("#result").should("have.text","6")
  })
})