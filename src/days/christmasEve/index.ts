export default function isChristmasEve(date: Date = new Date()) {
  return date.getUTCMonth() === 11 && date.getUTCDate() === 24;
}
