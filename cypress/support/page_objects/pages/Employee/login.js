Cypress.Commands.add("navigateTo",(url) => {
    cy.window().then((win) => {
        return win.open(url, "_self");
    });
    cy.wait(7000);
})
Cypress.Commands.add("checklogin",(url) => {
    cy.window().then((win) => {
        return win.open(url, "_self");
    });
    cy.wait(7000);
})