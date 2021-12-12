export default function isNewYearsEve(date = new Date()) {
  return date.getUTCMonth() === 11 && date.getUTCDate() === 31;
}
