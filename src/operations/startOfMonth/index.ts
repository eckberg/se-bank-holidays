export default function startOfMonth(referenceDate: Date = new Date()) {
  const date = new Date(+referenceDate);

  date.setUTCDate(1);

  return date;
}
