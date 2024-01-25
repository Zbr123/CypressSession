const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');
require('cypress-xpath');
const LoginPage = require("../../pageObjects/loginPage");

Given("I am on the forgot password page of herokoapp", () => {
    cy.visit("https://the-internet.herokuapp.com/forgot_password");
});

And("I type {string} in the email field", (email) => {
    LoginPage.email().type(email);
});

And("I click on Submit button", () => {
    LoginPage.submitButton().click();
});

Given("I am on the login page of herokoapp", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
});

And("I type {string} in the username field", (username) => {
    LoginPage.username().type(username);
});

And("I type {string} in the password field", (password) => {
    LoginPage.password().type(password);
});

And("I click on Login button", () => {
    LoginPage.loginButton().click();
});

Then("I should see success message", () => {
    LoginPage.successmessage();
});

When('I click on login button using XPath', () => {
    LoginPage.xpathLoginButton().click();
});

And('I clear the password field', () => {
    LoginPage.clearPassword();
});

Given('I am on the dropdown page', () => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
});

When('I select an option by value {string}', (value) => {
    LoginPage.selectOptionByValue(value);
});

Then('the selected option should have value {string}', (value) => {
    LoginPage.verifySelectedValue(value);
});

When('I select an option by text {string}', (text) => {
    LoginPage.selectOptionByText(text);
});

Given('I am on the checkboxes page', () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
});

When('I check the first checkbox', () => {
    LoginPage.checkFirstCheckbox();
});

Then('the first checkbox should be checked', () => {
    LoginPage.getFirstCheckbox().should('be.checked');
});

When('I uncheck the first checkbox', () => {
    LoginPage.uncheckFirstCheckbox();
});

Then('the first checkbox should not be checked', () => {
    LoginPage.getFirstCheckbox().should('not.be.checked');
});

When('I check the second checkbox', () => {
    LoginPage.checkSecondCheckbox();
});

Then('the second checkbox should be checked', () => {
    LoginPage.getSecondCheckbox().should('be.checked');
});

When('I uncheck the second checkbox', () => {
    LoginPage.uncheckSecondCheckbox();
});

Then('the second checkbox should not be checked', () => {
    LoginPage.getSecondCheckbox().should('not.be.checked');
});

And('I wait for {int} seconds', (seconds) => {
    cy.wait(seconds * 1000); // Convert seconds to milliseconds
});
