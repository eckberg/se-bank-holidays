/**
 * Juldagen. Den 25 december.
 * @param referenceDate
 * @returns
 */
export default function isChristmasDay(date: Date = new Date()) {
  return date.getUTCMonth() === 11 && date.getUTCDate() === 25;
}
