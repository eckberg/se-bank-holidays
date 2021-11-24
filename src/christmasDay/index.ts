/**
 * Juldagen. Den 25 december.
 * @param referenceDate
 * @returns
 */
export default function isChristmasDay(date: Date = new Date()) {
  /* const date = toInternalDate(referenceDate)
  return date.month === 12 && date.day === 25 */

  return date.getUTCMonth() === 11 && date.getUTCDate() === 25;
}
