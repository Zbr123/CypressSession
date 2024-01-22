class LoginPage {
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

  successmessage(){
    return cy.get(`div[id='flash']`).should('be.visible');
  }

}
module.exports = new LoginPage;
