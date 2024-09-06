/* eslint-disable no-undef */
const {sum, createPerson} = require('./../common');

/* describir o encerrar un grupo de pruebas */

describe('Pruebas de sum', () => {
    // otra forma de hacerlo
    test('Debería sumar', () => {
        // arrange + act
        const rta = sum(5, 3);
        // assert
        expect(rta).toBe(8);
        expect(sum(5, 5)).toBe(10);
        expect(sum(5, 10)).toBe(15);
        expect(sum(5, 0)).toEqual(5);
        // tobe booleans, strings, numbers
    });
})


describe('Pruebas de createPerson', () => {
    test('Crear una persona a partir de parametro', () => {
        const obj = createPerson('David', 25);
        expect(obj).toStrictEqual({name: 'David', age: 25});
        expect(obj).not.toStrictEqual({name: 'David', age: 26});
        // tostrictEqual objetos
    });    
})