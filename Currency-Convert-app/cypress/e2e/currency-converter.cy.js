describe('Currency Converter', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the currency converter page', () => {
    cy.contains('Convertio').should('be.visible')
    cy.get('input[type="number"]').should('be.visible')
    cy.get('select').should('have.length', 2)
    cy.contains('Convert').should('be.visible')
  })

  it('should convert currency successfully', () => {
    // Intercept the API call and mock the response
    cy.intercept('GET', 'https://api.exchangerate.host/convert*', {
      statusCode: 200,
      body: {
        result: 85.5,
        success: true
      }
    }).as('convertCurrency')

    cy.get('input[type="number"]').type('100')
    cy.get('select').first().select('USD')
    cy.get('select').last().select('EUR')
    cy.contains('Convert').click()

    // Wait for the API call to complete
    cy.wait('@convertCurrency', { timeout: 10000 })

    // The result should appear
    cy.contains('USD').should('be.visible')
    cy.contains('EUR').should('be.visible')
    cy.get('input[type="number"]').should('have.value', '100')
  })

  it('should show error for invalid amount', () => {
    cy.get('input[type="number"]').clear().type('0')
    cy.contains('Convert').click()
    cy.get('input[type="number"]').should('have.value', '0')
    cy.contains('Please enter a valid amount.').should('be.visible')
  })

  it('should show error for empty amount', () => {
    cy.get('input[type="number"]').clear()
    cy.contains('Convert').click()
    cy.get('input[type="number"]').should('have.value', '')
    cy.contains('Please enter a valid amount.').should('be.visible')
  })

  it('should disable convert button while loading', () => {
    // Intercept the API call to delay the response
    cy.intercept('GET', 'https://api.exchangerate.host/convert*', {
      statusCode: 200,
      body: {
        result: 85.5,
        success: true
      },
      delay: 1000 // Add delay to show loading state
    }).as('convertCurrency')

    cy.get('input[type="number"]').type('100')
    cy.contains('Convert').click()

    // Check that button is disabled during loading
    cy.get('button').should('be.disabled')

    // Wait for completion
    cy.wait('@convertCurrency')

    // Button should be enabled after completion
    cy.get('button').should('not.be.disabled')
  })

  it('should display currency symbols in dropdowns', () => {
    cy.get('select').first().find('option').should('have.length.greaterThan', 1)
    cy.get('select').last().find('option').should('have.length.greaterThan', 1)
  })
})
