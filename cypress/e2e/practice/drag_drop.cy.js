

const data = "('[cdkdraglockaxis='x']')"
const location = "('[cdkdraglockaxis='y']')"

describe("Drag and Drop", () => {

  beforeEach(() => {
    cy.visit('https://material.angular.io/cdk/drag-drop/examples');
  });
  
  it('should drag fried chicken to the order', () => {
    const dataTransfer = new DataTransfer();

    cy.get('.example-boundary > .cdk-drag').trigger('dragstart', {
      dataTransfer
    });

    cy.get('.example-boundary > .cdk-drag').trigger('drop', {
      dataTransfer
    });
    cy.wait(2000)
  });

});
