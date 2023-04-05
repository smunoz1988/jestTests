const capitalize = require('./capitalizeString');

test('capitalize the first letter', () => {
    expect(capitalize('mono')).toBe('Mono');
});