import { nextMidsummerDay } from "../midsummerDay";
import isSameDay from "../utils/isSameDay";
import subDays from "../utils/subDays";

export default function isMidsummerEve(referenceDate: Date = new Date()) {
  const midsummerDay = nextMidsummerDay(referenceDate);
  const midsummerEve = subDays(midsummerDay, 1);

  return isSameDay(midsummerEve, referenceDate);
}
