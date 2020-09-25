describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Login").click();
    });
  });
  it("User can see a render page", () => {
    cy.get("#cy-title").should("contain", "Rock, Paper, Scissors");
    cy.get("#cy-option").should("contain", "Choose game mode");
    cy.get("#cy-userCpu").contains("User vs CPU");
    cy.get("#cy-userUser").contains("User vs User");
  });

  describe("User vs CPU. User can choose the weapon", () => {
    it("User can select User vs CPU", () => {
      cy.get("#cy-userCpu").click();
      cy.get('[alt="rock"]').click();
      cy.get("#cy-userWeapon").contains("rock");
      cy.get('[alt="paper"]').click();
      cy.get("#cy-userWeapon").contains("paper");
      cy.get('[alt="scissor"]').click();
      cy.get("#cy-userWeapon").contains("scissor");
    });
  });

  describe("User vs User. Users can choose the weapons", () => {
    it("User can select User vs User", () => {
      cy.get("#cy-userUser").click();
      cy.get('[alt="rock"]').click({ multiple: true, force: true });
      cy.get("#cy-userWeapon").contains("rock");
      cy.get("#cy-user2Weapon").contains("rock");
      cy.get('[alt="paper"]').click({ multiple: true, force: true });
      cy.get("#cy-userWeapon").contains("paper");
      cy.get("#cy-user2Weapon").contains("paper");
      cy.get('[alt="scissor"]').click({ multiple: true, force: true });
      cy.get("#cy-userWeapon").contains("scissor");
      cy.get("#cy-user2Weapon").contains("scissor");
    });
  });
});
