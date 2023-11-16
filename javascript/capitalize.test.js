const capitalize = require('./capitalize');

test('Capitalizes the first character of a string and returns it', () => {
    expect(capitalize('billy')).toMatch(/Billy/);
});