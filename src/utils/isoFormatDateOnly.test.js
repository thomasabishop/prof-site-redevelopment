import isoFormatDateOnly from './isoFormatDateOnly';

test('returns ISO string without date', () => {
  expect(isoFormatDateOnly('2011-10-05T14:48:00.000Z')).toBe('2011-10-05');
});
