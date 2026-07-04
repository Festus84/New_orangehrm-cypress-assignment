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
  //Task 1: The Employee Search
  it("The Employee Search", function () {
    cy.contains("span", "PIM").click();
    cy.url().should("include", "/pim");
    cy.contains("Employee Information").should("be.visible");
    cy.get(".oxd-autocomplete-text-input input").first().type("Charlie");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
    cy.get(".orangehrm-horizontal-padding > .oxd-text").should("be.visible");
  });
  //Task 2: The Dropdown Menu
  //   it("should select a Sub Unit and search successfully", () => {
  //       //     cy.contains("span", "Leave").click();
  //     cy.url().should("include", "/leave/viewLeaveList");
  //     cy.contains("label", "Sub Unit").parent().find(".oxd-select-text").click();
  //     cy.contains(".oxd-select-option", "Administration").click();
  //     cy.contains("button", "Search").click();
  //     cy.url().should("include", "/leave/viewLeaveList");
  //   });

  //Task 3: The Admin Section Check
  it("should navigate to Admin and verify System Users page", () => {
    cy.contains("span", "Admin").click();
    cy.url().should("include", "/admin/viewSystemUsers");
    // cy.get(".oxd-table-filter-title")
    //   .should("be.visible")
    //   .and("have.text", "System Users");
    // cy.contains("button", "Add").should("be.visible");
  });
  //Task 4: The Homepage Dashboard
  it("should verify the Assign Leave shortcut on the Dashboard", () => {
    cy.contains("span", "Dashboard").click();
    cy.url().should("include", "/dashboard");
    cy.contains("Quick Launch").should("be.visible");
    cy.contains("Assign Leave")
      .should("be.visible")
      .and("have.text", "Assign Leave");
  });

  //Task 5: The "My Info" Profile Page
  it("should navigate to My Info and verify the First Name field", () => {
    cy.contains("span", "My Info").click();
    cy.url().should("include", "/pim/viewPersonalDetails");
    cy.get('input[name="firstName"]').should("be.visible");
  });
  //Task 6: The "Add Employee" Form
  it.only("should navigate to Add Employee and fill out the form", () => {
    cy.get(":nth-child(1) > .oxd-main-menu-item").click()
    cy.AddESSUserType();
  });
  
});
