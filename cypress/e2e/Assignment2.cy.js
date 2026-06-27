///<reference types="cypress" />

describe("OrangeHMO Login Test", function () {
  beforeEach(() => {
    cy.session("loginSession", () => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      );

      cy.get('input[name="username"]').type("Admin");
      cy.get('input[name="password"]').type("admin123");
      cy.contains("button", "Login").click();
      cy.url().should("include", "/dashboard");
    });

    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
    );

    cy.get(".oxd-main-menu").should("be.visible");
  });

  it("The Employee Search", function () {
    // cy.visit("https://opensource-demo.orangehrmlive.com/");
    // cy.get('[name="username"]').type("Admin");
    // cy.get('[name="password"]').type("admin123");
    // cy.get('[type="submit"]').click();
    // cy.url().should("include", "/dashboard/index");
    // cy.wait(2000);
    cy.contains('span', 'PIM').click();
    cy.url().should("include", "/pim");
    cy.contains("Employee Information").should("be.visible");
    cy.get(".oxd-autocomplete-text-input input").first().type("Charlie");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
    cy.get(".orangehrm-horizontal-padding > .oxd-text").should("be.visible");
  });

  //   it("should select a Sub Unit and search successfully", () => {
  //     cy.visit("https://opensource-demo.orangehrmlive.com/");
  //     cy.get('[name="username"]').type("Admin");
  //     cy.get('[name="password"]').type("admin123");
  //     cy.get('[type="submit"]').click();
  //     cy.url().should("include", "/dashboard/index");
  //     cy.wait(2000);
  //     cy.contains("span", "Leave").click();
  //     cy.url().should("include", "/leave/viewLeaveList");
  //     cy.contains("label", "Sub Unit").parent().find(".oxd-select-text").click();
  //     cy.contains(".oxd-select-option", "Administration").click();
  //     cy.contains("button", "Search").click();
  //     cy.url().should("include", "/leave/viewLeaveList");
  //   });

  it("should navigate to Admin and verify System Users page", () => {
    // cy.visit("https://opensource-demo.orangehrmlive.com/");
    // cy.get('[name="username"]').type("Admin");
    // cy.get('[name="password"]').type("admin123");
    // cy.get('[type="submit"]').click();
    // cy.url().should("include", "/dashboard/index");
    // cy.wait(2000);
    cy.contains("span", "Admin").click();
    cy.url().should("include", "/admin/viewSystemUsers");
    cy.get(".oxd-table-filter-title")
      .should("be.visible")
      .and("have.text", "System Users");
    cy.contains("button", "Add").should("be.visible");
  });

  it("should verify the Assign Leave shortcut on the Dashboard", () => {
    // cy.visit("https://opensource-demo.orangehrmlive.com/");
    // cy.get('[name="username"]').type("Admin");
    // cy.get('[name="password"]').type("admin123");
    // cy.get('[type="submit"]').click();
    // cy.url().should("include", "/dashboard/index");
    // cy.wait(2000);
    cy.contains("span", "Dashboard").click();
    cy.url().should("include", "/dashboard");
    cy.contains("Quick Launch").should("be.visible");
    cy.contains("Assign Leave")
      .should("be.visible")
      .and("have.text", "Assign Leave");
  });

  it("should navigate to My Info and verify the First Name field", () => {
    // cy.visit("https://opensource-demo.orangehrmlive.com/");
    // cy.get('[name="username"]').type("Admin");
    // cy.get('[name="password"]').type("admin123");
    // cy.get('[type="submit"]').click();
    // cy.url().should("include", "/dashboard/index");
    // cy.wait(2000);
    cy.contains("span", "My Info").click();
    cy.url().should("include", "/pim/viewPersonalDetails");
    cy.get('input[name="firstName"]').should("be.visible");
  });
});
