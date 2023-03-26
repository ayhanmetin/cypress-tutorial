/// <reference types="cypress" />


describe('newsletter button', () => {

  beforeEach(() => {

    cy.task('seedDatabase')
    cy.visit('/')

  });
  
  it('should display a succes message ', () => {
    cy.intercept('POST', '/newsletter*', {status: 201}).as('subscribe')

    cy.get('[data-cy="newsletter-email"]').click()
    cy.get('[data-cy="newsletter-email"]').type('test@example.com')
    cy.get('[data-cy="newsletter-submit"]').click()
    cy.wait('@subscribe')
    cy.contains('Thanks for signing up!')
  });

  it('should display an error message ', () => {
    cy.intercept('POST', '/newsletter*', {message: 'Email exist already!'}).as('subscribe')

    cy.get('[data-cy="newsletter-email"]').click()
    cy.get('[data-cy="newsletter-email"]').type('test@example.com')
    cy.get('[data-cy="newsletter-submit"]').click()
    cy.wait('@subscribe')
    cy.contains('Email exist already!')
  });

  it.only('should succesfully create a new contact', () => {
    cy.request({
      method: 'POST',
      url: '/newsletter',
      body: { email: 'test@example.com' },
      form: true
    }).then(res => {
      expect(res.status).to.eq(201)
    })
  });
});