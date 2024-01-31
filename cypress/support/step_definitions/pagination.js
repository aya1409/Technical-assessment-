import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
const PaginationPo = require('../page_objects/Employee/paginationpo.js');
const paginationPage = new PaginationPo();;
const qs = require("qs");


 

When('should have pagination controls', function() {
    paginationPage.getPaginationContainer().should('exist');
    paginationPage.getNextPageButton().should('exist');
    paginationPage.getPreviousPageButton().should('exist');
    paginationPage.getPageNumber().should('exist'); 
    paginationPage.getItemsPerPageDropdown().should('exist');
});

When('should navigate to the next page', function()  {
    // Click on the next page button
    paginationPage.getNextPageButton().click({force: true});
    paginationPage.getPreviousPageButton().click({force: true});

});





When('should go to a specific page using input', function()  {
    const pageNumber = 3; // Replace with the desired page number

    // Input the desired page number
    paginationPage.getPageNumber().clear().type(pageNumber);
});

When('should change items per page using dropdown', function()  {
    const itemsPerPage = 1; 
    paginationPage.getItemsPerPageDropdown().click({force: true });

    // Select the desired items per page from the dropdown
    paginationPage.selectItemsPerPage(itemsPerPage).click({force: true });

    // Add assertions to verify the content on the current page with the new items per page
    // Example:
    cy.get('#treeGrid .jqx-grid-cell').should('exist');
});