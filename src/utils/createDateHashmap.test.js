import createDateHashMap from './createDateHashmap';

test('returns map of length n', () => {
  expect(createDateHashMap(30).size).toBe(30);
});

test('key value is 0', () => {
  expect(createDateHashMap(2).keys().next().value).toMatch(/\d{4}-\d{2}-\d{2}/);
});
