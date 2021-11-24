export default function isNationalDay(date: Date = new Date()) {
  /* const date = toInternalDate(referenceDate);
  return date.month === 6 && date.day === 6 */

  return date.getUTCMonth() === 5 && date.getUTCDate() === 6;
}
