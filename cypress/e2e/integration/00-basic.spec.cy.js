/// <reference types="Cypress" />

describe('Visiting the url https://escuela.it/', () => {
    it('should have _EscuelaIT_ on its title', () => {
        cy.visit('https://escuela.it/');
        cy.title().should('include', 'EscuelaIT');
    })
})

// aquí estamos declarando nuestras intenciones como testers, no hace falta
// el asycn await, porque cypress ya lo maneja internamente

/* testea como si fuese el usuario, de manera que visitas una web, escribes, tecleas... y eso es lo que testea
cy.get('').type('').click();

el should es una aserción, es decir, una afirmación, que se espera que sea cierta
casi siempre se usa con dos argumentos, el primero es un comparador y el segundo es el valor que se espera que sea cierto
cy.get('h1').should('have.text', 'EscuelaIT');

hay un ejemplo más completo en 00-bdd.spec.cy.js
*/