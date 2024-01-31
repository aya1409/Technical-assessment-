const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const setupNodeEvents = require("./cypress/plugins/index");


module.exports = defineConfig({

  
  e2e: {
    specPattern: "**/*.feature",
    // Assurez-vous de configurer correctement setupNodeEvents
    setupNodeEvents,
    numTestsKeptInMemory: 1,
  //   setupNodeEvents(on, config) {
  //     allureWriter(on, config);
  //     return config;},
   },
  
 
 
});

