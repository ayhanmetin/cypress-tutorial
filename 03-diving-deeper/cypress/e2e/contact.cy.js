/// <reference types="cypress" />

describe('contract form', () => {
  it('should submit the form1', () => {

    cy.visit('http://127.0.0.1:5173/about')
    
    cy.get('[data-cy="contact-input-message"]').type('New message')
    cy.get('[data-cy="contact-input-name"]').type('Ayhan')
    cy.get('[data-cy="contact-input-email"]').type('test@test.com')
    cy.get('[data-cy="contact-btn-submit"]').click()

    cy.get('[data-cy="contact-btn-submit"]') //1
    .contains('Sending...')
    .should('have.attr', 'disabled')
    
    cy.get('[data-cy="contact-btn-submit"]') //2
    .contains('Sending...')
    .should(
      'have.attr',
      'disabled')

      cy.get('[data-cy="contact-btn-submit"]') //3
      .contains('Sending...')
      .and('have.attr', 'disabled')  
      
  });

  it('should submit the form2', () => {
    
    cy.visit('http://127.0.0.1:5173/about')
    cy.get('[data-cy="contact-input-message"]').type('New message')
    cy.get('[data-cy="contact-input-name"]').type('Ayhan')
    cy.get('[data-cy="contact-input-email"]').type('test@test.com')

    // not recommended

    const btn = cy.get('[data-cy="contact-btn-submit"]')
    
    btn.click()
    btn.contains('Sending...')
    btn.should('have.attr', 'disabled') 
  });

  it('should submit the form3', () => {
    
    cy.visit('http://127.0.0.1:5173/about')
    cy.get('[data-cy="contact-input-message"]').type('New message')
    cy.get('[data-cy="contact-input-name"]').type('Ayhan')
    cy.get('[data-cy="contact-input-email"]').type('test@test.com')

    cy.get('[data-cy="contact-btn-submit"]').as('submmitBtn')

    //recommended

    cy.get('@submmitBtn').click()
    cy.get('@submmitBtn').contains('Sending...')
    cy.get('@submmitBtn').should('have.attr', 'disabled')
    
  });

  it('should send message button not be disabled before click', () => {
    cy.visit('http://127.0.0.1:5173/about')
    
    cy.get('[data-cy="contact-input-message"]').type('New message')
    cy.get('[data-cy="contact-input-name"]').type('Ayhan')
    cy.get('[data-cy="contact-input-email"]').type('test@test.com')

    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el.text('Send Message'));
      expect(el.attr('disabled')).to.be.undefined;
    })

    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el.text('Send Message'));
      expect(el.attr('disabled')).to.be.undefined;
    })
  });

  it('should validate the form input', () => {
    cy.visit('http://127.0.0.1:5173/about')

    cy.get('[data-cy="contact-btn-submit"]').click
    cy.get('[data-cy="contact-btn-submit"]').then((el) =>{
      expect(el).to.not.have.attr('disabled')
      expect(el.text()).does.not.eq('Sending...')
    })
    cy.get('[data-cy="contact-btn-submit"]').contains('Send Message')
    cy.get('[data-cy="contact-input-message"]').focus().blur()
    cy.get('[data-cy="contact-input-message"]').parent().then((el)=>{
      expect(el.attr('class')).to.contain('invalid')
    })

    cy.get('[data-cy="contact-input-name"]').focus().blur()
    cy.get('[data-cy="contact-input-name"]').parent().then((el)=>{
      expect(el.attr('class')).to.contain('invalid')
    })
    cy.screenshot()
    cy.get('[data-cy="contact-input-email"]').focus().blur()
    cy.get('[data-cy="contact-input-email"]').parent().then((el)=>{
      expect(el.attr('class')).to.contain('invalid') // also should can be use same as then
    })

  });
})
