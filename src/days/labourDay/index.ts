export default function isLabourDay(date: Date = new Date()) {
  return date.getUTCMonth() === 4 && date.getUTCDate() === 1;
}
