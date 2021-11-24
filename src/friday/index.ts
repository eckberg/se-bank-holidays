export function isFriday(date: Date) {
  /* const date = toInternalDate(referenceDate);
  return date.weekday === 'Friday';*/

  return date.getUTCDay() === 5;
}
