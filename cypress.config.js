module.exports = {
  e2e: {
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
    }
  },
};
