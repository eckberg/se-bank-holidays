// import toInternalDate from "../utils/toInternalDate";

export default function isWeekend(date: Date = new Date()) {
  /* const date = toInternalDate(referenceDate)
  return date.weekday === 'Saturday' || date.weekday === 'Sunday' */
  return date.getUTCDay() === 6 || date.getUTCDay() === 0;
}
