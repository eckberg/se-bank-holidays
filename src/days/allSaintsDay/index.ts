/**
 * Alla helgons dag. Den lördag som infaller under tiden den 31 oktober-6 november.
 * @param referenceDate
 */
export default function isAllSaintsDay(date: Date = new Date()) {
  return (
    date.getUTCDay() === 6 &&
    ((date.getUTCMonth() === 9 && date.getUTCDate() === 31) ||
      (date.getUTCMonth() === 10 &&
        date.getUTCDate() >= 1 &&
        date.getUTCDate() <= 6))
  );
}
