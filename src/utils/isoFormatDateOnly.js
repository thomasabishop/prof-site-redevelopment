/* Take an ISO formatted date and return date only, without time
 * @function
 * @param {string} isoString an ISO-8601 string
 * @return {string} the ISO string without date
 * * */

export default function isoFormatDateOnly(isoString) {
  const rgx = /\d{4}-\d{2}-\d{2}/gi;
  let [destructed] = isoString.match(rgx);
  return destructed;
}
