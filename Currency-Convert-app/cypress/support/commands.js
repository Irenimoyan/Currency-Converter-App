// Custom commands for Cypress tests

// Command to perform currency conversion
Cypress.Commands.add('convertCurrency', (amount, fromCurrency, toCurrency) => {
  cy.get('input[type="number"]').clear().type(amount)
  cy.get('select').first().select(fromCurrency)
  cy.get('select').last().select(toCurrency)
  cy.contains('Convert').click()
})

// Command to login (if you set up test users)
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('input[placeholder="Email"]').type(email)
  cy.get('input[placeholder="Password"]').type(password)
  cy.contains('Login').click()
})

// Command to wait for conversion result
Cypress.Commands.add('waitForConversion', () => {
  cy.contains('Convert').should('not.be.disabled')
  cy.get('.text-green-300').should('be.visible')
})

// Command to wait for error message
Cypress.Commands.add('waitForError', (errorText) => {
  cy.contains(errorText).should('be.visible')
  cy.get('.text-red-300').should('be.visible')
})
