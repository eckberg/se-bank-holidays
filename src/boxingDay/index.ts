/**
 * Annandag jul. Den 26 december.
 * @param referenceDate
 */
export default function isBoxingDay(date: Date = new Date()) {
  // const date = toInternalDate(referenceDate);
  // return date.month === 12 && date.day === 26;

  return date.getUTCMonth() === 11 && date.getUTCDate() === 26;
}
