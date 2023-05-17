const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // To avoid typing the whole URL in each visit statement
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
