export default function isWeekend(date: Date = new Date()) {
  return date.getUTCDay() === 6 || date.getUTCDay() === 0;
}
