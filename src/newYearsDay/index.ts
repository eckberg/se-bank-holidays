export default function isNewYearsDay(date = new Date()) {
  /* const date = toInternalDate(referenceDate);
  return date.month === 1 && date.day === 1; */

  return date.getUTCMonth() === 0 && date.getUTCDate() === 1;
}
