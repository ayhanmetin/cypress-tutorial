/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('li').should('have.length', 6)
    cy.get('li').should('have.lengthOf.at.least', 6)
    cy.get('li').should('have.length.above', 5)
    cy.get('li').should('have.length.greaterThan', 5)
    cy.get('li').should('have.length.within', 5, 7)
    cy.get('li').should('not.have.length.above', 8)
    cy.get('li').should('not.have.length', 7)
  })
})