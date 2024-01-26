// / <reference types="cypress" />
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
    cy.get(`button[type='submit']`).click()
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

  it('Intentionally fails and retries twice', { retries: 1 }, () => {
    cy.visit('https://the-internet.herokuapp.com/hovers');
    // Hover over the first image
    cy.get('.figure').first().trigger('mouseover');

    // Intentionally fail the first two runs
    cy.get('.figcaption').first().should('contain', 'Incorrect Caption');
  });

  it('Passes on the second retry', { retries: 1 }, () => {
    cy.visit('https://the-internet.herokuapp.com/hovers');
  
    // Hover over the first image
    cy.get('.figure').first().trigger('mouseover');
  
    // Check if the caption contains 'Incorrect Caption'
    cy.get('.figcaption').first().should(($caption) => {
      if ($caption.text().includes('Incorrect Caption')) {
        // If the caption contains 'Incorrect Caption', intentionally fail the first run
        throw new Error('Intentional failure on the first run');
      }
    });
  
    // On the second retry, the test will intentionally pass
    cy.get('.figcaption').first().should('contain', 'name: user1');
  });

  
  describe('Login Validation Test with Variables and Aliases', () => {
    it('Validates error messages using variables and aliases', () => {
      // Visit the login page
      cy.visit('https://the-internet.herokuapp.com/login');
  
      // Define invalid login credentials
      const invalidUsername = 'invaliduser';
      const invalidPassword = 'InvalidPassword123';
  
      // Use aliases to store elements for later use
      cy.get('#username').as('usernameInput');
      cy.get('#password').as('passwordInput');
      cy.get('button[type="submit"]').as('loginButton');
  
      // Fill in the login form with invalid credentials
      cy.get('@usernameInput').type(invalidUsername);
      cy.get('@passwordInput').type(invalidPassword);
  
      // Click the login button
      cy.get('@loginButton').click();
  
      // Assertions for validation messages
      cy.contains('Your username is invalid!').should('be.visible'); // Check for invalid username message
    });
  });
  

  describe('Login Test with Debugging', () => {
    it('Logs in with debugging', () => {
      // Visit the login page
      cy.visit('https://the-internet.herokuapp.com/login');
  
      // Define login credentials
      const username = 'tomsmith';
      const password = 'SuperSecretPassword!';
  
      // Debugging point 1
      cy.debug();
  
      // Use aliases to store elements for later use
      cy.get('#username').as('usernameInput');
      cy.get('#password').as('passwordInput');
      cy.get('button[type="submit"]').as('loginButton');
  
      // Debugging point 2
      cy.debug();
  
      // Fill in the login form using variables
      cy.get('@usernameInput').type(username);
      cy.get('@passwordInput').type(password);
  
      // Click the login button
      cy.get('@loginButton').click();
  
      // Assertions
      cy.url().should('include', '/secure'); // Check if the URL contains '/secure' after login
      cy.contains('Welcome to the Secure Area').should('be.visible'); // Check for a welcome message
    });
  });
 
  
  describe('Multiple Tabs Test', () => {
    it('Simulates interactions with multiple tabs', () => {
      // Visit the main page
      cy.visit('https://the-internet.herokuapp.com');
  
      // Navigate to 'Multiple Windows'
      cy.contains('Multiple Windows').click();
  
      // Click the link that normally opens a new window and capture the URL
      cy.get('a[href="/windows/new"]').then($link => {
        const newWindowUrl = $link.prop('href');
  
        // Directly visit the new window URL
        cy.visit(newWindowUrl);
      });
  
      // Perform interactions or assertions on the new page
      cy.contains('New Window');
  
      // Navigate back to the original page
      cy.visit('https://the-internet.herokuapp.com/windows');
    });
  });

  // access new tab by clicking on "href". when don't have target attribute to remove and test on new opened tab?

  describe('Accessing a New Page via Link URL', () => {
    it('Captures link URL and visits it in the same tab', () => {
      const baseUrl = 'https://the-internet.herokuapp.com';
  
      // Visit the main page with a wait
      cy.visit(baseUrl);
      cy.wait(1000); // Wait for 1 second
  
      // Find the link and get its href attribute
      cy.get('a[href="/abtest"]').invoke('attr', 'href').then(href => {
        const absoluteUrl = href.startsWith('http') ? href : baseUrl + href;
  
        // Wait before visiting the new URL
        cy.wait(1000); // Wait for 1 second
  
        // Visit the link's URL
        cy.visit(absoluteUrl);
        cy.wait(1000); // Wait for 1 second
      });
  
      // Perform assertions or interactions on the new page
      cy.get('h3').should('contain', 'A/B Test').wait(1000); // Wait after assertion
    });
  });
  
  
  
  
  
  
})