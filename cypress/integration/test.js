describe('Testing support App', () => {
    it("visits app", () => {
        cy.visit("http://localhost:3000/pizza");
    });
    it("types in name field", () => {
        cy.get("#name").type("Orlando").should("have.value", "Orlando");
    });
    it("checks checkboxes", () => {
        cy.get("#cheese").check().should("be.checked");
        cy.get("#pepperoni").check().should("be.checked");
        cy.get("#sausage").check().should("be.checked");
        cy.get("#pineapple").check().should("be.checked");
    });
    it ("Can Submit the form", () => {
        cy.get(".submit").click()
    })
});