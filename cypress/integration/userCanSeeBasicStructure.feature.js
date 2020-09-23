describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("User can see a render page", () => {
    cy.get("#cy-title").should("contain", "Rock, Paper, Scissors");
    cy.get("#cy-option").should("contain", "Choose game mode");
    cy.get('#cy-userCpu').contains('User vs CPU');
    cy.get('#cy-userUser').contains('User vs User');
  });

  
})