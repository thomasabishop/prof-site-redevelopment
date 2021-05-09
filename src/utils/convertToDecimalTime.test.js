import convertToDecimalTime from './convertToDecimalTime';

test('convert hrs:mins to decimal value', () => {
  expect(convertToDecimalTime(3, 35)).toBe(3.58);
});

test('returns value of type: number', () => {
  expect(typeof convertToDecimalTime(1, 75)).toBe('number');
});
