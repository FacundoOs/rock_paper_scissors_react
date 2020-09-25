describe("User vs Cpu", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad: (x) => {
        cy.stub(x.Math, "floor").returns(1);
      },
    });
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Login").click();
    });
  });
  it("User can see the result vs Cpu", () => {
    cy.get("#cy-userCpu").click();
    cy.get('[alt="rock"]').click();
    cy.get("#cy-fight").click();
    cy.get("#cy-cpuWeapon").contains("paper");
    cy.get("#cy-winner").contains("The winner is : User 2");
  });
});
