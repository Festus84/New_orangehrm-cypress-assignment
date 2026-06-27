///<reference types="cypress" />

describe("Saucedemo Login Test", function () {

    it("should login with valid credentials", function () {
        cy.visit("www.saucedemo.com");
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.url().should("include", "/inventory.html");
    });

    it("should not login with invalid credentials", function () {
        cy.visit("www.saucedemo.com");
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("wrong_password");
        cy.get("#login-button").click();
        cy.get("[data-test='error']").should("be.visible");
        cy.get("[data-test='error']").should("contain.text", "Username and password do not match any user in this service");
    })

    it("should not login with empty Password", function () {
        cy.visit("www.saucedemo.com");
        cy.get("#user-name").type("standard_user");
        cy.get("#login-button").click();
        //cy.get("#password").type("");
        cy.get("[data-test='error']").should("be.visible");
        cy.get("[data-test='error']").should("contain.text","Epic sadface: Password is required");
    })

    it("should not login with empty Username", function () {
        cy.visit("www.saucedemo.com");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.get("[data-test='error']").should("be.visible");
        cy.get("[data-test='error']").should("contain.text","Epic sadface: Username is required");
    });
});
