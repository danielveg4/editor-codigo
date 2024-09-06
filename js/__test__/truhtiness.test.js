/* eslint-disable no-undef */
const { isEven, divide } = require('./../truhtiness');

describe('Pruebas de isEven', () => {
    test('Debería ser true con números pares', () => {
        const rta = isEven(8);
        expect(rta).toBeTruthy();
    });
    test('Debería ser false con números impares', () => {
        const rta = isEven(9);
        expect(rta).toBeFalsy();
    });
})

describe('Pruebas de divide', () => {
    test('debería dividir', () => {
        expect(divide(6, 2)).toEqual(3);
    })
    test('debería dividir con cero', () => {
        expect(divide(6, 0)).toBeNull();
    })
    /*  test('Debería lanzar una excepción cuando el denominador sea cero', () => {
            const func = () => {
                divide(6, 0);
            }
            expect(func).toThrow();
        })
            En este ejemplo es importante pasar la array function porque sino no te va a tirar el throw    */
});