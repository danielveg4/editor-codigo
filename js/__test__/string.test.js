/* eslint-disable no-undef */
const { reverseString } = require('./../string');

describe('Pruebas de reverseString', () => {
    test ('Debería invertir una cadena', () => {
        const rta = reverseString('Hola mundo');
        expect(rta).toMatch(/odnum/); // toMatch es para comparar cadenas, pero no tiene que ser todo igual sino que permite ver si contiene una palabra concreta
    });
});