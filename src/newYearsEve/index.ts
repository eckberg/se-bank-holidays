export default function isNewYearsEve(date = new Date()) {
  /* const date = toInternalDate(referenceDate);
  return date.month === 12 && date.day === 31; */

  return date.getUTCMonth() === 11 && date.getUTCDate() === 31;
}
