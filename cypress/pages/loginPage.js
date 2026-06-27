class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com");
  }

  getUsernameField() {
    return cy.get('[data-test="username"]');
  }

  getPasswordField() {
    return cy.get('[data-test="password"]');
  }

  getLoginButton() {
    return cy.get('[data-test="login-button"]');
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  enterUsername(username) {
    this.getUsernameField().clear().type(username);
  }

  enterPassword(password) {
    this.getPasswordField().clear().type(password);
  }

  submit() {
    this.getLoginButton().click();
  }

  login(username, password) {
    this.visit();
    this.enterUsername(username);
    this.enterPassword(password);
    this.submit();
  }
}

module.exports = new LoginPage();
