describe("Customer Login", () => {
  it("Success Login Magento", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.contains("Sign In").click();
    cy.get("#email").type("lilyan@gmail.com");
    cy.get("#pass").type("Lilyan123");
    cy.get("#send2").contains("Sign In").click();
  });

  it("Failed Login with invalid email", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.contains("Sign In").click();
    cy.get("#email").type("lilyan08@gmail.com");
    cy.get("#pass").type("Lilyan123");
    cy.get("#send2").contains("Sign In").click();
    cy.get(".message-error").should("be.visible");
  });

  it("Failed Login with invalid password", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.contains("Sign In").click();
    cy.get("#email").type("lilyan08@gmail.com");
    cy.get("#pass").type("Lilyan321");
    cy.get("#send2").contains("Sign In").click();
    cy.get(".message-error").should("be.visible");
  });

  it("Failed Login with empty email & password", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.contains("Sign In").click();
    cy.get("#send2").contains("Sign In").click();
    cy.get(".message-error").should("be.visible");
  });
});
