const string = require('./stringLength');

test('string lenght to equal 4', () => {
    expect(string('casa')).toBe(4);
  });

test('word less than 1 or larger than 10', () => {
    try {
        string('');
        fail('Expected error was not thrown');
    } catch (error) {
        expect(error.message).toBe('word is less than 1 or larger than 10!');
    }
    });

test('word less than 1 or larger than 10', () => {
    try {
        string('alcantarillas');
        fail('Expected error was not thrown');
    } catch (error) {
        expect(error.message).toBe('word is less than 1 or larger than 10!');
    }
    });


  