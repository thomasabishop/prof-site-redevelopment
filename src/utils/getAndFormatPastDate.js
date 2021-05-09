/*
 * Generate a past date as the nth distance from a start date, formatted as an ISO string. This outputs one string but typically this will be looped to make up a month.
 * @function
 * @param {object} startDate JS Date object
 * @param {number} daysSinceStartDate number of days to go back by
 * @return {string} an ISO date n days from startDate
 */

import isoFormatToDateOnly from './isoFormatDateOnly';

export default function getAndFormatPastDate(startDate, daysSinceStartDate) {
  let pastDate = new Date().setDate(startDate.getDate() - daysSinceStartDate);
  pastDate = new Date(pastDate);
  return isoFormatToDateOnly(pastDate.toISOString());
}
