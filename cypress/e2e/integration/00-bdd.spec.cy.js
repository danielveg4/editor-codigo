/// <reference types="Cypress" />

/* 
FEATURE         have web site with a title
AS A            visitor
I WANT TO       view the title of web site https://escuela.it/
In order to     be more conditioned to visit it

Scenario:       Visiting the url https://escuela.it/
Given           the url https://escuela.it
When            I visit it
Then            should have _EscuelaIT_ on its title

*/

describe('Visiting the url https://escuela.it/', () => {
    it('should have _EscuelaIT_ on its title', () => {
        cy.visit('https://escuela.it/');
        cy.title().should('include', 'EscuelaIT');
    })
})

const sutUrl = 'https://escuela.it/';
describe(`GIVEN: the url ${sutUrl}`, () => {
    context(`WHEN: I visit it`, () => {
        before(() => {
            cy.visit(sutUrl);
        });
        const expected = 'EscuelaIT';
        it(`THEN: I should see the title ${expected}`, () => {
            cy.title().should('include', expected);
        });
    }
    );
});