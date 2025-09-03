# Cypress Testing for Currency Converter App

This directory contains end-to-end tests for the Currency Converter application using Cypress.

## Setup

1. Make sure the development server is running:
   ```bash
   npm run dev
   ```

2. Install Cypress (if not already installed):
   ```bash
   npm install cypress --save-dev
   ```

## Running Tests

### Open Cypress Test Runner (Interactive)
```bash
npm run cypress:open
```
This opens the Cypress GUI where you can select and run individual tests.

### Run Tests Headlessly
```bash
npm run cypress:run
```
This runs all tests in headless mode (useful for CI/CD).

## Test Structure

### `e2e/currency-converter.cy.js`
Tests for the main currency conversion functionality:
- Page loading
- Successful currency conversion
- Error handling for invalid inputs
- Loading states
- Currency dropdown validation

### `e2e/auth.cy.js`
Tests for authentication features:
- Login page navigation
- Authentication prompts
- Login form validation

### `support/commands.js`
Custom Cypress commands for reusable test actions:
- `cy.convertCurrency(amount, from, to)` - Performs currency conversion
- `cy.login(email, password)` - Logs in a user
- `cy.waitForConversion()` - Waits for conversion to complete

## Writing New Tests

1. Create new test files in the `e2e/` directory with the `.cy.js` extension
2. Use descriptive test names and organize tests with `describe` blocks
3. Leverage custom commands for common actions
4. Use data-testid attributes for reliable element selection when possible

## Best Practices

- Keep tests independent and isolated
- Use `beforeEach` for common setup
- Avoid hard-coded waits; use assertions to wait for elements
- Test both positive and negative scenarios
- Mock external API calls when testing error conditions

## Configuration

The Cypress configuration is in `cypress.config.js` at the project root. It includes:
- Base URL pointing to the development server
- End-to-end testing setup
- Support file imports
