import LoginPo from "../../support/page_objects/login/login.po";

// Assuming baseUrl is configured in Cypress
const loginPage = new LoginPo();

describe('Login', () => {
    beforeEach(() => { // Correct the typo in 'beforeEach'
        cy.visit('http://localhost:8080/employees.html');
    });

    it('Verify that the user is successfully logged in.', () => {
        // Prefer using meaningful variable names for readability
        const username = 'admin';
        const password = 'admin';

        // Use chaining for better readability
        loginPage.usernameInput().type(username);
        loginPage.passwordInput().type(password);

        // Clicking on the submit button doesn't typically require using { force: true }
        loginPage.submitButton().click();
    });

    // it('should display an error for wrong credentials', () => {
    //     // Use cy.visit with a relative URL, assuming baseUrl is configured
    //     // This might not be necessary as the beforeEach hook is already navigating to the page

    //     // Prefer using meaningful variable names for readability
    //     const wrongUsername = 'wrongusername';
    //     const wrongPassword = 'wrongpassword';

    //     // Use chaining for better readability
    //     loginPage.usernameInput().type(wrongUsername);
    //     loginPage.passwordInput().type(wrongPassword);

    //     // Clicking on the submit button doesn't typically require using { force: true }
    //     loginPage.submitButton().click();

    //     // Use Cypress assertions for better handling of asynchronous operations
    //     loginPage.errorMessage().should('exist');
    // });
});
