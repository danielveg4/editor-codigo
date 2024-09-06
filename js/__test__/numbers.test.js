/* eslint-disable no-undef */
const {sum} = require('./../numbers');

/* describir o encerrar un grupo de pruebas */

describe('Pruebas de sum', () => {
    test('Debería ser mayor que', () => {
        // arrange + act
        const rta = sum(5, 3);
        // assert
        expect(rta).toBeGreaterThan(5);
        expect(sum(5, 5)).toBeLessThanOrEqual(11);
    });
})