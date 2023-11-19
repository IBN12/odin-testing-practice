const calculator = require('./calculator');

test('calculator: adds two numbers and returns the value', () => {
    expect(calculator.add(3, 4)).toBe(7);
});

test('calculator: subtracts two number and returns the value', () => {
    expect(calculator.subtract(4, 1)).toBe(3);
});

test('calculator: divides two numbers and returns the value', () => {
    expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});

test('calculator: multiplies two numbers and returns the value', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});