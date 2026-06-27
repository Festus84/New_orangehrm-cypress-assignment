///<reference types="cypress" />

describe("Saucedemo Login Test", function () {
  beforeEach(function () {
    cy.session("loginSession", function () {
      cy.visit("www.saucedemo.com");
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      cy.get("#login-button").click();
    });
  });

  //cy.url().should("include", "/inventory.html");

  it("Add 3 items to cart", function () {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    //scroll to top
    cy.scrollTo("top");
  });

  it("click on the cart icon", function () {
    cy.get(".shopping_cart_link").click();
    cy.wait(2000);
    //Checkout should be visible
    cy.get('[data-test="checkout"]').should("be.visible");
    cy.get('[data-test="checkout"]').click();
    //scrowlto bottom
    cy.scrollTo("bottom");
    // Validate that you are in the check out page
    cy.url().should("include", "/checkout-step-one.html");
    // Enter the details in the checkout page
    cy.get("#first-name").type("Festu");
    cy.get("#last-name").type("Akinyemi");
    cy.get("#postal-code").type("112211");
    cy.get('[data-test="continue"]').click();

    //validate that you are in the checkout overview page
    cy.url().should("include", "/checkout-step-two.html");

    //scroll to bottom
    //cy.scrollTo("bottom");

    //validate that the finish button is visible
    cy.get('[data-test="finish"]').should("be.visible");
    cy.get('[data-test="finish"]').click();

    //validate that you are in the checkout complete page and the success message is visible
    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header").should("be.visible");
    cy.get(".complete-header").should(
      "contain.text",
      "Thank you for your order!",
    );

    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header").should("be.visible");
    cy.get(".complete-header").should(
      "contain.text",
      "Thank you for your order!",
    );

    cy.get('[data-test="back-to-products"]').should("be.visible");
    cy.get('[data-test="back-to-products"]').click();

    //Validate that you are back in the inventory page
    cy.url().should("include", "/inventory.html");
  });
});
