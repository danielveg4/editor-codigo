/* eslint-disable no-undef */
const { delay } = require('./../async');

describe('Pruebas de async', () => {
    test('debería retornar true con then', () => {
        return delay(1000) // importante poner el return aquí para que jest sepa que tiene que esperar
        .then((rta) => {
            expect(rta).toBeTruthy();
        })
    })
    test('debería retornar true con async await', async () => {
        const rta = await delay(1000) // sin el return tendría que ir con async y quitamos el then
        expect(rta).toBeTruthy();
    })
})