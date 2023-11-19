const caesarCipher = require('./caesarCipher'); 

test('Shift each character in the string up by alphabetical order', () => {
    expect(caesarCipher('World', 1)).toMatch(/xpsme/);
});

test('Shift each character in the string up by alphabetical order', () => {
    expect(caesarCipher('Ride', 2)).toMatch(/tkfg/);
});