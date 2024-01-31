class LoginPo {
    usernameInput = () => cy.get('#form > p:nth-child(1) > input[type=text]');
    passwordInput = () => cy.get('#form > p:nth-child(2) > input[type=password]');
    submitButton = () => cy.get('#form > p:nth-child(3) > input[type=submit]');
    errorMessage = () => cy.get('#error-message');
}

export default LoginPo;
