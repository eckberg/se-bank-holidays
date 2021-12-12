/**
 * Annandag jul. Den 26 december.
 * @param referenceDate
 */
export default function isBoxingDay(date: Date = new Date()) {
  return date.getUTCMonth() === 11 && date.getUTCDate() === 26;
}
