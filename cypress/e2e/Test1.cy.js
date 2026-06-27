/// <reference types="cypress" />

const loginPage = require('../pages/loginPage');

describe('Saucedemo LoginTest', function () {
  beforeEach(function () {
    loginPage.visit();
  });

  it('Login with valid credentials', function () {
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory');
  });

  it('Login with invalid credentials', function () {
    loginPage.login('standard_user', '_sauce');
    loginPage
      .getErrorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Login with empty username', function () {
    loginPage.enterUsername('');
    loginPage.enterPassword('_sauce');
    loginPage.submit();

    loginPage
      .getErrorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });
});





//Assignment for the next class
//Automate the entire CheckOut flow, ensure to cover at least 5 test scenarios