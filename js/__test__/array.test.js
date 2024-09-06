/* eslint-disable no-undef */
const {createArray} = require('./../array');

beforeAll(() => console.log('1 - beforeAll')); // se ejecuta antes de todas las pruebas
afterAll(() => console.log('1 - afterAll')); // después 

describe('Pruebas de array', () => {

    // el before y after también pueden ser usados aquí, en un describe, para que solo se ejecuten en ese bloque

    test('Debería crear un array a partir de un string', () => {
        expect(createArray('hola', '')).toContain('h');
        expect(createArray('10:08:12', ':')).toContain('10');
        expect(createArray('10:08:12', ':').length).toEqual(3);
    });
    test('Otras pruebas', () => {
        expect(createArray('123', '')).toContain('1');
        expect(createArray('123', ':').length).toEqual(1);
    });
});