
describe('contract form', () => {
  
  it('should validate the form input', () => {
    cy.task('seedDatabase', 'filename.csv').then(returnValue =>{
      // ... use return value
    })
    
    cy.visit('http://127.0.0.1:5173/about')
    cy.getById('contact-btn-submit').click
    cy.getById('contact-btn-submit').then((el) =>{
      expect(el).to.not.have.attr('disabled')
      expect(el.text()).does.not.eq('Sending...')
      })
    })
  });