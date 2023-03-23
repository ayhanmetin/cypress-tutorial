/// <reference types="cypress" />

describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  });

  it('should render the main image', () => {
    cy.get('img') //not enough
    cy.get('.main-header img')

    cy.get('.main-header').get('img') //not nested
    cy.get('.main-header').find('img')
  });

  it('should contain title in h1 element', () => {
  cy.get('h1').invoke('text').should('contain', 'React Task')
  });

  it('should contain title text in h1 element', () => {
  cy.get('h1').then(($h1) => {
    expect($h1.text()).to.contain('React Task')
  })
  });

  it('should h1 element contains text', () => {
    cy.get('h1').contains('React Task')

    cy.get('h1').should('contain','React Task')
    
    cy.get('h1').should('not.be.empty')
  });

});