export default function endOfMonth(referenceDate: Date = new Date()) {
  const date = new Date(+referenceDate);

  date.setUTCMonth(date.getUTCMonth() + 1);
  date.setUTCDate(1);
  date.setUTCDate(date.getUTCDate() - 1);

  return date;
}
