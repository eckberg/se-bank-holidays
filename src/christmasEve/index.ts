// import toInternalDate from "../utils/toInternalDate";

export default function isChristmasEve(date: Date = new Date()) {
  /* const date = toInternalDate(referenceDate)
  return date.month === 12 && date.day === 24 */

  return date.getUTCMonth() === 11 && date.getUTCDate() === 24;
}
