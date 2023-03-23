/// <reference types="cypress" />

describe('task management', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  });
it('should open and close the new task modal', () => {
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('.backdrop').click({force: true})
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')

    cy.get('[data-cy="start-add-task-button"]').click()
    cy.contains('Cancel').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
});
  
it('should create a new task', () => {
  cy.get('[data-cy="start-add-task-button"]').click()
  cy.get('#title').type('First Task')
  cy.get('#summary').type('First test summary')
  cy.get('#category').select(0)
  cy.get('.modal').contains('Add Task').click()
  cy.get('.task').should('have.length', 1)
  cy.get('.task h2').contains('First Task')
  cy.get('.task p').contains('First test summary')


  cy.get('[data-cy="start-add-task-button"]').click()
  cy.get('#title').type('Second Task')
  cy.get('#summary').type('Second test summary')
  cy.get('#category').select(2)
  cy.get('.modal').contains('Add Task').click()
  cy.get('.task').should('have.length', 2)
  cy.get('.task-list > :nth-child(2) h2').contains('Second Task')
  cy.get('.task-list > :nth-child(2) p').contains('Second test summary')
});

it('should validate user input', () => {
  cy.get('[data-cy="start-add-task-button"]').click()
  cy.get('.modal').contains('Add Task').click()
  cy.contains('Please provide')
});

it('should filter task', () => {
  cy.get('[data-cy="start-add-task-button"]').click()
  cy.get('#title').type('First Task')
  cy.get('#summary').type('First test summary')
  cy.get('#category').select('urgent')
  cy.contains('Add Task').click()
  cy.get('#filter').select('urgent')
  cy.get('.task').should('have.length', 1)

  cy.get('[data-cy="start-add-task-button"]').click()
  cy.get('#title').type('First Task')
  cy.get('#summary').type('First test summary')
  cy.get('#category').select('urgent')
  cy.contains('Add Task').click()
  cy.get('#filter').select('low')
  cy.contains('No tasks')
  cy.get('.task').should('have.length', 0)
});

it.only('should add multiple task', () => {
  cy.get('[data-cy="start-add-task-button"]').click()
  cy.get('#title').type('First Task')
  cy.get('#summary').type('First test summary')
  cy.contains('Add Task').click()
  cy.get('.task').should('have.length', 1)


  cy.get('[data-cy="start-add-task-button"]').click()
  cy.get('#title').type('Second Task')
  cy.get('#summary').type('Second test summary')
  cy.contains('Add Task').click()
  cy.get('.task').should('have.length', 2)

  cy.get('.task').eq(0).contains('First Task')
  cy.get('.task').eq(1).contains('Second Task')


  cy.get('.task').first().contains('First Task')
  cy.get('.task').last().contains('Second Task')
});

})
