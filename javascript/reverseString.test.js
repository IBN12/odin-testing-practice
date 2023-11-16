const reverseString = require('./reverseString');

test('Will reverse all the characters in the string and return it', () => {
    expect(reverseString('Made Now Bully')).toMatch(/edaM woN ylluB/);
});