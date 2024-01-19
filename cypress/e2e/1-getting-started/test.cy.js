/// <reference types="cypress" />
require('cypress-xpath');

describe('Forgot Password', () => {
  beforeEach(() => {
    // cy.visit('https://the-internet.herokuapp.com/forgot_password')
  })

  it('Forgot password with valid email address', () => {
    cy.visit('https://the-internet.herokuapp.com/forgot_password')
    cy.get('#email').type("zubair@co-ventech.com")
    cy.get('#form_submit').click()
  })


  it('Forgot password with invalid email address', () => {
    cy.visit('https://the-internet.herokuapp.com/forgot_password')
    cy.get('#email').type("zubair@")
    cy.get('#form_submit').click()
  })

  it('Login with correct username and password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.xpath(`//button[@type='submit']`).click()
    cy.get('.flash').should('be.visible').and('contain', 'You logged into a secure area!');
  })

  //XPATH SCENARIO
  it('Login with correct username and password using xpath for login button', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.xpath(`//button[@type='submit']`).click()
    cy.get('.flash').should('be.visible').and('contain', 'You logged into a secure area!');
  })


  // SOME MORE ACTIONS

  it('Clears the password field', () => {
    // Type something in the password field and then clear it
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#password').type('Password');
    cy.wait(5000);
    cy.get('#password').clear();

    // Add assertions as needed
  });

  it('Selects an option from the dropdown', () => {
    // Visit the dropdown page
    cy.visit('https://the-internet.herokuapp.com/dropdown');

    // Select an option by its value
    cy.get('#dropdown').select('1').should('have.value', '1');

    // Select another option by its text
    cy.get('#dropdown').select('Option 2').should('have.value', '2');
  });

  it('Checks and unchecks checkboxes', () => {
    // The page has two checkboxes. We'll interact with both.
    cy.visit('https://the-internet.herokuapp.com/checkboxes');

    // Check the first checkbox
    cy.get('form#checkboxes input[type="checkbox"]').first().check().should('be.checked');

    // Uncheck the first checkbox
    cy.get('form#checkboxes input[type="checkbox"]').first().uncheck().should('not.be.checked');

    // Check the second checkbox
    cy.get('form#checkboxes input[type="checkbox"]').last().check().should('be.checked');

    // Uncheck the second checkbox
    cy.get('form#checkboxes input[type="checkbox"]').last().uncheck().should('not.be.checked');
  });

  it('Intentionally fails and retries twice', { retries: 2 }, () => {
    cy.visit('https://the-internet.herokuapp.com/hovers');
    // Hover over the first image
    cy.get('.figure').first().trigger('mouseover');

    // Intentionally fail the first two runs
    cy.get('.figcaption').first().should('contain', 'Incorrect Caption');
  });
})