import loginPage from "../support/loginPage";

describe("Customer Login", () => {
  beforeEach(() => {
    cy.visit("");
  });
  it("Success Login Magento", () => {
    // cy.visit("https://magento.softwaretestingboard.com/");

    cy.contains("Sign In").click();
    // cy.get("#email").type("lilyan@gmail.com");
    cy.get(loginPage.email).type("lilyan@gmail.com");
    cy.get(loginPage.passw).type("Lilyan123");
    cy.get(loginPage.loginBtn).contains("Sign In").click();
  });

  it("Failed Login with invalid email", () => {
    // cy.visit("https://magento.softwaretestingboard.com/");

    cy.contains("Sign In").click();
    cy.get(loginPage.email).type("lilyan08@gmail.com");
    cy.get(loginPage.passw).type("Lilyan123");
    cy.get(loginPage.loginBtn).contains("Sign In").click();
    cy.get(loginPage.error_msg).should("be.visible");
  });

  it("Failed Login with invalid password", () => {
    // cy.visit("https://magento.softwaretestingboard.com/");

    cy.contains("Sign In").click();
    cy.get(loginPage.email).type("lilyan08@gmail.com");
    cy.get(loginPage.passw).type("Lilyan321");
    cy.get(loginPage.loginBtn).contains("Sign In").click();
    cy.get(loginPage.error_msg).should("be.visible");
  });

  it("Failed Login with empty email & password", () => {
    // cy.visit("https://magento.softwaretestingboard.com/");

    cy.contains("Sign In").click();
    cy.get(loginPage.loginBtn).contains("Sign In").click();
    cy.get(loginPage.error_msg).should("be.visible");
  });
});
