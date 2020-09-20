describe("User can interact with the app", () => {
  it("succesfully render", () => {
    cy.visit("http://localhost:3000");
    cy.get("#rock").should("contain", "rock");
    cy.get("#paper").should("contain", "paper");
    cy.get("#scissors").should("contain", "scissors");
    cy.get("#fight").should("contain", "Fight");
  });
  it("user can set a nickname"), () => {
    
  }
});