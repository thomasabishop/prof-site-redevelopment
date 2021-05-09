/*
 * Create a hashmap of schema  for specified number of days
 * @function
 * @param {number} days : total number of days to include
 * @return {object} : hashmpa of schema 'DATE' => {commitCount: 0}
 */

import getAndFormatPastDate from './getAndFormatPastDate';

export default function createHashMap(days) {
  const monthHashmap = new Map();
  const today = new Date();
  while (days > 0) {
    monthHashmap.set(getAndFormatPastDate(today, days), { commitCount: 0 });
    days--;
  }
  monthHashmap.set(getAndFormatPastDate(today, 0), { commitCount: 0 });
  return monthHashmap;
}
