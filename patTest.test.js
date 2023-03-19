const patDog = require('./index');

test('Counting number of pats, plus 1', () => {
    expect(patDog(1)).toBe(2);
});