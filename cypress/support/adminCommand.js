Cypress.Commands.add("AddESSUserType", () => {
  cy.get(":nth-child(2) > .oxd-input").type("Walex");
  cy.get(
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
  ).click();
  cy.get(".oxd-autocomplete-text-input input").type("Linda Anderson");
  cy.get(".oxd-select-text").eq(1).click();
  cy.get('input[type="password"]').eq(0).type("Password123!");
  cy.get('input[type="password"]').eq(1).type("Password123!");
  cy.contains("button", "Save").click();
});
