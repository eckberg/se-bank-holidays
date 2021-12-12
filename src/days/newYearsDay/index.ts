export default function isNewYearsDay(date = new Date()) {
  return date.getUTCMonth() === 0 && date.getUTCDate() === 1;
}
