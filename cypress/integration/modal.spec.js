describe("Modal", () => {
  it("should display modal when it's needed", () => {
    cy.visit("/fragments/portfolio/");
    cy.get(".modal.show").should("have.length", 0);
    cy.get(".has-modal").then(items => items[0].click());
    cy.get(".modal.show").should("have.length", 1);
  });
});
