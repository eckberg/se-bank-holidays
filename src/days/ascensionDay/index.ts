import { easterSundayForYear } from "../easterSunday";
import { isThursday } from "../thursday";
import addDays from "../../operations/addDays";
import isSameDay from "../../utils/isSameDay";

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
}
