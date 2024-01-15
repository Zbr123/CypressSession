/// <reference types="cypress" />


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
    cy.get(`button[type='submit']`).click()
    cy.get('.flash').should('be.visible').and('contain', 'Youx logged into a secure area!');
  })
})