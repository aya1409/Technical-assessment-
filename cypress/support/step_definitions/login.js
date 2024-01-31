
import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
const LoginPo = require('../page_objects/Login/loginpo.js');
const loginPage = new LoginPo();
const qs = require("qs");


 

When("navigate to {string}", function (data) {

    cy.visit(data);
  });


When('Verify that the user is successfully logged in', function()  {
    // Prefer using meaningful variable names for readability
    const username = 'admin';
    const password = 'admin';

    // Use chaining for better readability
    loginPage.usernameInput().type(username);
    loginPage.passwordInput().type(password);

    // Clicking on the submit button doesn't typically require using { force: true }
    loginPage.submitButton().click();
});


