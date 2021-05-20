describe("Calculator Page", () => {
  beforeEach(function () {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("Should have an exernal CSS file", () => {
    cy.get("link").invoke("attr", "href").should("eq", "calculator.css");
  });

  it("Should have 2 number inputs", () => {
    let elements = cy.get("input[type=number]");
    elements.should("have.length", 2);
  });

  it("Should have 4 operation labels and 2 input labels", () => {
    let elements = cy.get("label");
    elements.should("have.length", 6);
  });

  it("Should have 4 operation inputs", () => {
    let elements = cy.get("input[type=radio]");
    elements.should("have.length", 4);
  });

  it("Should have an = button", () => {
    let element = cy.get("button").contains("=");
    expect(element).to.exist;
  });

  it("Should have a Clear button", () => {
    let element = cy.get("button").contains("Clear");
    expect(element).to.exist;
  });

  it("Should have bolded text once selected", () => {
    cy.get("input[type=radio]").first().click();
    cy.get("label").contains("Add").should("have.css", "font-weight", "600");
  });

  it("Should have a span to hold the results", () => {
    let element = cy.get("#result");
    expect(element).to.exist;
  });

  it("Should display a result on operation", () => {
    cy.get("input[type=number]").first().type("4");
    cy.get("input[type=number]").last().type("5");
    cy.get("input[type=radio]").first().click();
    cy.get("button").contains("=").click();
    let element = cy.get("#result");
    element.should("include.text", "9");
  });

  it("Should have empty inputs on clear", () => {
    cy.get("input[type=number]").first().type("4");
    cy.get("input[type=number]").last().type("5");
    cy.get("input[type=radio]").first().click();
    cy.get("button").contains("Clear").click();
    cy.get("input[type=number]").first().should("have.value", "");
    cy.get("input[type=number]").last().should("have.value", "");
  });
});
