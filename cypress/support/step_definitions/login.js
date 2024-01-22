const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');
require('cypress-xpath');
const BasePage = require("../../pageObjects/basePage");
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
