const analyzeArray = require('./analyzeArray');

test('Will take an array of numbers and returns them in a object', () => {
    const objectOne = analyzeArray([10, 5, 3, 10, 12, 8]);
    expect(objectOne).toEqual({nAverage: 7.6, nMinimum: 3, nMaximum: 12, nLength: 5}); 
});