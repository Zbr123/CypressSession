require('cypress-xpath');
class LoginPage {

  visit() {
    cy.visit('https://the-internet.herokuapp.com/login');
}

typeUsername(username) {
    cy.get('#username').as('usernameInput').type(username);
}

typePassword(password) {
    cy.get('#password').as('passwordInput').type(password);
}

clickLogin() {
    cy.get('button[type="submit"]').as('loginButton').click();
}

getValidationMessage() {
    return cy.contains('Your username is invalid!');
}

  usernameField() {
    return cy.get('[data-testid="Email input"]');
  }

  submitButton() {
    return cy.get('#form_submit');
  }

  email() {
    return cy.get('#email');
  }

  username() {
    return cy.get('#username');
  }

  password() {
    return cy.get('#password');
  }

  loginButton() {
    return cy.get(`button[type='submit']`);
  }

  xpathLoginButton() {
    return cy.xpath(`//button[@type='submit']`);
  }

  successmessage(){
    return cy.get(`div[id='flash']`).should('be.visible');
  }

  clearPassword() {
    cy.get('#password').clear();
  }

  selectOptionByValue(value) {
    cy.get('#dropdown').select(value);
  }

  selectOptionByText(text) {
    cy.get('#dropdown').select(text);
  }

  verifySelectedValue(value) {
    cy.get('#dropdown').should('have.value', value);
  }

  checkFirstCheckbox() {
    cy.get('form#checkboxes input[type="checkbox"]').first().check();
  }

  uncheckFirstCheckbox() {
    cy.get('form#checkboxes input[type="checkbox"]').first().uncheck();
  }

  checkSecondCheckbox() {
    cy.get('form#checkboxes input[type="checkbox"]').last().check();
  }

  uncheckSecondCheckbox() {
    cy.get('form#checkboxes input[type="checkbox"]').last().uncheck();
  }

  getFirstCheckbox() {
    return cy.get('form#checkboxes input[type="checkbox"]').first();
  }

  getSecondCheckbox() {
    return cy.get('form#checkboxes input[type="checkbox"]').last();
  }

  checkUrlContains(text) {
    cy.url().should('include', text);
}

checkWelcomeMessageVisible() {
  cy.contains('Welcome to the Secure Area').should('be.visible');
}

}
module.exports = new LoginPage;
