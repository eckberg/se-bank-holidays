export default function endOfMonth(referenceDate: Date = new Date()) {
  const date = new Date(+referenceDate);

  date.setUTCMonth(11);
  date.setUTCDate(31);

  return date;
}
