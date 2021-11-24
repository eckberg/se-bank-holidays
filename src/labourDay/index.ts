export default function isLabourDay(date: Date = new Date()) {
  /* const date = toInternalDate(referenceDate);
  return date.month === 5 && date.day === 1;*/

  return date.getUTCMonth() === 4 && date.getUTCDate() === 1;
}
