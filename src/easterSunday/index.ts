import { isSunday } from "../sunday";
import addDays from "../utils/addDays";
import isSameDay from "../utils/isSameDay";
import startOfDay from "../utils/startOfDay";
import { phaseRange } from "../utils/lunar"

/*
  Easter sunday (påskdagen) is the sunday after the full moon
  happening on or after 21 March.
*/
export default function isEasterSunday(referenceDate: Date = new Date()) {
  const thisYearsES = easterSundayForYear(referenceDate.getUTCFullYear());

  return isSameDay(referenceDate, thisYearsES);
}

export function easterSundayForYear(year: number): Date {
  const searchRangeStart = new Date(year, 2, 21);

  const searchRangeEnd = new Date(+searchRangeStart);
  searchRangeEnd.setUTCMonth(searchRangeStart.getUTCMonth() + 1);

  // Get full moon phases occuring after March 21
  const lunarPhases = phaseRange(
    searchRangeStart,
    searchRangeEnd,
    2
  );

  // First full moon after March 21
  // Add one day, "sunday after the full moon"
  const easterSunday = addDays(lunarPhases[0], 1);

  // Find first sunday thereafter
  while (!isSunday(easterSunday)) {
    easterSunday.setUTCDate(easterSunday.getUTCDate() + 1);
  }

  // Reset time derived by lunar calculation
  return startOfDay(easterSunday);
}

export function nextEasterSunday(referenceDate: Date = new Date()) {
  // Current year's easter sunday
  const currentYearsES = easterSundayForYear(referenceDate.getUTCFullYear());

  // Same date or in the future
  if (
    isSameDay(currentYearsES, referenceDate) ||
    currentYearsES > referenceDate
  ) {
    return currentYearsES;
  }

  // Or next year's easter sunday
  return easterSundayForYear(referenceDate.getUTCFullYear() + 1);
}
