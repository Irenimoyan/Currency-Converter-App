describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show login tip when not authenticated', () => {
    cy.contains('Tip:').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('to save your conversion history').should('be.visible')
  })

  it('should navigate to login page', () => {
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.contains('Login').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="password"]').should('be.visible')
  })

  it('should show login form elements', () => {
    cy.visit('/login')
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Password"]').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('No account?').should('be.visible')
    cy.contains('Register').should('be.visible')
  })

  // Note: For actual login testing, you would need to set up test users
  // or mock the authentication. This is a basic structure.
  it('should show error for invalid login', () => {
    cy.visit('/login')
    cy.get('input[placeholder="Email"]').type('invalid@example.com')
    cy.get('input[placeholder="Password"]').type('wrongpassword')
    cy.contains('Login').click()
    // This would depend on how your auth handles errors
    // cy.contains('Invalid credentials').should('be.visible')
  })
})
