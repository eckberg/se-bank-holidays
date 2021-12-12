import { nextEasterSunday } from "../easterSunday";
import { isFriday } from "../friday";
import isSameDay from "../../utils/isSameDay";
import subDays from "../../operations/subDays";

/**
 * Långfredagen. Fredagen närmast före påskdagen
 * @param referenceDate
 */
export default function isGoodFriday(referenceDate: Date = new Date()) {
  let testDate = nextEasterSunday(referenceDate);

  while (!isFriday(testDate)) {
    testDate = subDays(testDate, 1);
  }

  return isSameDay(referenceDate, testDate);
}
