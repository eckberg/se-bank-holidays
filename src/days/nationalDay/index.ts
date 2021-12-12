export default function isNationalDay(date: Date = new Date()) {
  return date.getUTCMonth() === 5 && date.getUTCDate() === 6;
}
