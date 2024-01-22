# Installation
After cloning the repository, ensure you have a recent version of npm installed, and then install npx:

`npm install -g npx`

Note: you may need to provide privileged access to npm in order to install npx. If you have it already installed, you'll probably get an error telling you it's already installed.

Then install the repository's dependencies:

`npm install`

# Usage
To run the tests headlessly and generate reports:

`npm run test`

# Debugging
Video recordings and screenshots are available in `./cypress/video` and `./cypress/screenshots` respectively. An HTML report of the test run (including stack trace) can be found in `./mochawesome-report`.

For debugging with a browser window:

`npm run debug`

Then navigate the UI to run any tests you would like to debug.

If for some reason you would like to omit reporting from the test run, you can do so:

`npm run test-no-report`


For further details on running Cypress, consult the docs: https://docs.cypress.io
# Lineup-Cypress
# Lineup-Cypress
