import { nextEasterSunday } from "../easterSunday";
import addDays from "../utils/addDays";
import isSameDay from "../utils/isSameDay";

/**
 * Annandag påsk. Dagen efter påskdagen.
 * @param referenceDate
 */
export default function isEasterMonday(referenceDate: Date = new Date()) {
  // Minus one day if testing same date
  const testDate = new Date(+referenceDate);
  testDate.setUTCDate(testDate.getUTCDate() - 1);

  // Get next easter sunday from reference date
  const nextES = nextEasterSunday(testDate);

  // Add one day
  const easterMonday = addDays(nextES, 1);

  return isSameDay(referenceDate, easterMonday);
}
