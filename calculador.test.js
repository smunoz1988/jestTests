const calculador = require('./calculador');

describe('sum', () => {
    test('2 + 3 = 5', () => {
        expect(calculador.add(2, 3)).toBe(5);
    });
    test('-2 + -1 = -3', () => {
        expect(calculador.add(-2, -1)).toBe(-3);
    });
    test('4 + -1 = 3', () => {
        expect(calculador.add(4, -1)).toBe(3);
    });
});