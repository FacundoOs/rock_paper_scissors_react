describe("User can start the battle", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Login").click();
    });
  });

  it("User can see the result vs User2", () => {
    cy.get("#cy-userUser").click();
    cy.get('[alt="rock"]').click({ multiple: true, force: true });
    cy.get("#cy-fight").click();
    cy.get("#cy-winner").contains("The winner is: Tie");
  });

  it("User can see the result vs Cpu", () => {
    cy.get("#cy-userCpu").click();
    cy.get('[alt="rock"]').click();
    cy.get("#cy-fight").click();
  });
});
