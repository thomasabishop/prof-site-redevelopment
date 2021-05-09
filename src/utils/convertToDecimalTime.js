/* Convert clock time hrs:mins to decimal value
 * @function
 * @param {number} hours : time in hours
 * @param {number} minutes : time in minutes
 * @return {number} time as decimal to two places
 */

export default function convertToDecimalTime(hours, minutes) {
  let decimalMins = minutes / 60;
  let strForm = (hours + decimalMins).toFixed(2);
  return Number(strForm);
}
