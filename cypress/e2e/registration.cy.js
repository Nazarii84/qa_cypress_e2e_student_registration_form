/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill basic student data', () => {
    cy.get('#firstName').type('Nazar');
    cy.get('#lastName').type('Kaminskyi');
    cy.get('#userEmail').type('nazar@test.com');

    cy.contains('label', 'Male').click();
    cy.get('#userNumber').type('1234567890');

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__month-select').select('April');

    cy.contains('.react-datepicker__day', '15').click();

    cy.get('#subjectsInput').type('Maths{enter}');

    cy.contains('label', 'Sports').click();

    cy.get('#currentAddress').type('Ternopil, Ukraine');

    cy.get('#state').click();
    cy.contains('div', 'NCR').click();

    cy.get('#city').click();
    cy.contains('div', 'Delhi').click();

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');

    cy.contains('Nazar Kaminskyi').should('exist');
    cy.contains('nazar@test.com').should('exist');
    cy.contains('Male').should('exist');
    cy.contains('1234567890').should('exist');
    cy.contains('15 April,1995').should('exist');
    cy.contains('Maths').should('exist');
    cy.contains('Sports').should('exist');
    cy.contains('Ternopil, Ukraine').should('exist');
    cy.contains('NCR Delhi').should('exist');
  });
});
