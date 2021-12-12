import { nextEasterSunday } from "../easterSunday";
import { isSaturday } from "../saturday";
import isSameDay from "../../utils/isSameDay";
import subDays from "../../operations/subDays";

/**
 * Påskafton. Lördagen närmast före påskdagen.
 * @param referenceDate
 */
export default function isEasterEve(referenceDate: Date = new Date()) {
  let testDate = nextEasterSunday(referenceDate);

  while (!isSaturday(testDate)) {
    testDate = subDays(testDate, 1);
  }

  return isSameDay(referenceDate, testDate);
}
