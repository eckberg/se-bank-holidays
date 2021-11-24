import { easterSundayForYear } from "../easterSunday";
import { isThursday } from "../thursday";
import addDays from "../utils/addDays";
import isSameDay from "../utils/isSameDay";

/**
 * Kristi himmelsfärdsdag sjätte torsdagen efter påskdagen
 * @param referenceDate
 */
export default function isAscensionDay(referenceDate: Date = new Date()) {
  const currentYearsES = easterSundayForYear(referenceDate.getUTCFullYear());

  let ascensionDay = new Date(+currentYearsES);
  let thursdayCount = 0;

  while (thursdayCount < 6) {
    ascensionDay = addDays(ascensionDay, 1);

    if (isThursday(ascensionDay)) thursdayCount++;
  }

  return isSameDay(ascensionDay, referenceDate);

  /* // Minus six weeks to make sure we match same year
  const testDate = new Date(+referenceDate)
  testDate.setUTCDate(testDate.getUTCDate() - 6 * 7)

  // Get next easter sunday from reference date
  const nextES = nextEasterSunday(testDate)

  const ascensionDay = new Date(+nextES)
  let thursdayCount = 0

  while (thursdayCount < 6) {
    ascensionDay.setUTCDate(ascensionDay.getUTCDate() + 1)

    if (toInternalDate(ascensionDay).weekday === 'Thursday') thursdayCount++
  }

  return toInternalDate(referenceDate).iso === toInternalDate(ascensionDay).iso */
}
