import { easterSundayForYear, nextEasterSunday } from "../easterSunday";
import { isSunday } from "../sunday";
import addDays from "../../operations/addDays";
import isSameDay from "../../utils/isSameDay";

/**
 * Pingstdagen. Sjunde söndagen efter påskdagen.
 * @param referenceDate
 */
export default function isPentecost(referenceDate: Date = new Date()) {
  // Base from current year's easter sunday
  let whitsunCurrentYear = easterSundayForYear(referenceDate.getUTCFullYear());

  let sundaysCount = 0;

  while (sundaysCount < 7) {
    whitsunCurrentYear = addDays(whitsunCurrentYear, 1);

    if (isSunday(whitsunCurrentYear)) sundaysCount++;
  }

  return isSameDay(whitsunCurrentYear, referenceDate);
}

export function nextPentecost(referenceDate: Date = new Date()) {
  // Base from current year's easter sunday
  let whitsunCurrentYear = easterSundayForYear(referenceDate.getUTCFullYear());

  let sundaysCount = 0;

  while (sundaysCount < 7) {
    whitsunCurrentYear = addDays(whitsunCurrentYear, 1);

    if (isSunday(whitsunCurrentYear)) sundaysCount++;
  }

  if (
    isSameDay(whitsunCurrentYear, referenceDate) ||
    whitsunCurrentYear > referenceDate
  ) {
    return whitsunCurrentYear;
  }

  let whitsunNextYear = easterSundayForYear(referenceDate.getUTCFullYear() + 1);

  sundaysCount = 0;

  while (sundaysCount < 7) {
    whitsunNextYear = addDays(whitsunNextYear, 1);

    if (isSunday(whitsunNextYear)) sundaysCount++;
  }

  return whitsunNextYear;
}
