/* eslint-disable no-undef */
const {createArray} = require('./../array');

describe('Pruebas de array', () => {
    test ('Debería crear un array a partir de un string', () => {
        expect(createArray('hola', '')).toContain('h');
        expect(createArray('10:08:12', ':')).toContain('10');
        expect(createArray('10:08:12', ':').length).toEqual(3);
    });
});