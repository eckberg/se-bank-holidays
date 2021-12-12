export function isSunday(referenceDate: Date) {
  return referenceDate.getUTCDay() === 0;
}
