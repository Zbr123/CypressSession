const { defineConfig } = require('cypress');

module.exports = {
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/',
    video: true,
    screenshotsOnFail: true, 
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    "reporterOptions": {
      reportDir: 'cypress/reports/mocha',
      "overwrite": true,
      "html": true,
      "json": true
    },
  
  },
  
};
