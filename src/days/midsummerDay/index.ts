import { isSaturday } from "../saturday";
import addDays from "../../operations/addDays";

/**
 * Midsommardagen. Den lördag som infaller under tiden den 20-26 juni.
 * @param referenceDate
 * @returns
 */
export default function isMidsummerDay(date: Date = new Date()) {
  return (
    isSaturday(date) &&
    date.getUTCMonth() === 5 &&
    date.getUTCDate() >= 20 &&
    date.getUTCDate() <= 26
  );
}

export function nextMidsummerDay(referenceDate: Date = new Date()) {
  let next = new Date(+referenceDate);

  while (!isMidsummerDay(next)) {
    next = addDays(next, 1);
  }

  return next;
}
