const revString = require('./reverse');

test('return reverse string', () => {
    expect(revString('mono')).toBe('onom');
})