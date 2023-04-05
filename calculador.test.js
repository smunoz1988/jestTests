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

describe('subtract', () => {
    test('2 - 3 = -1', () => {
        expect(calculador.subtract(2, 3)).toBe(-1);
    });
    test('-2 - -1 = -1', () => {
        expect(calculador.subtract(-2, -1)).toBe(-1);
    });
    test('4 - 1 = 3', () => {
        expect(calculador.subtract(4, 1)).toBe(3);
    });
});

describe('divide', () => {
    test('6 / 3 = 2', () => {
        expect(calculador.divide(6, 3)).toBe(2);
    });
    test('8 / 4 = 2', () => {
        expect(calculador.divide(8, 4)).toBe(2);
    });
    test('5 - 2 = 2.5', () => {
        expect(calculador.divide(5, 2)).toBe(2.5);
    });
});