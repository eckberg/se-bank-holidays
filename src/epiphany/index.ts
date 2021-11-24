/**
 * Trettondedag jul. Den 6 januari.
 * @param date
 * @returns
 */
export default function isEpiphany(date = new Date()) {
  return date.getUTCMonth() === 0 && date.getUTCDate() === 6;
}
