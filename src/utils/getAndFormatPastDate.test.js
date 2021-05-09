import getAndFormatPastDate from './getAndFormatPastDate';

const date = new Date('2021-05-07');

test('generates and formats past date--01', () => {
  expect(getAndFormatPastDate(date, 1)).toBe('2021-05-06');
});

test('generates and formats past date--02', () => {
  expect(getAndFormatPastDate(date, 10)).toBe('2021-04-27');
});
