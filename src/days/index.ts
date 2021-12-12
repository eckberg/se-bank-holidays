import isAllSaintsDay from "./allSaintsDay";
import isAscensionDay from "./ascensionDay";
import isBoxingDay from "./boxingDay";
import isChristmasDay from "./christmasDay";
import isChristmasEve from "./christmasEve";
import isEasterEve from "./easterEve";
import isEasterMonday from "./easterMonday";
import isEasterSunday from "./easterSunday";
import isEpiphany from "./epiphany";
import isGoodFriday from "./goodFriday";
import isLabourDay from "./labourDay";
import isMidsummerDay from "./midsummerDay";
import isMidsummerEve from "./midsummerEve";
import isNationalDay from "./nationalDay";
import isNewYearsDay from "./newYearsDay";
import isNewYearsEve from "./newYearsEve";
import isPentecost from "./pentecost";
import isWeekend from "./weekend";
import isWhitsunEve from "./whitsunEve";

export default function isHoliday(referenceDate: Date = new Date()): boolean {
  return (
    isWeekend(referenceDate) ||
    isNewYearsDay(referenceDate) ||
    isNewYearsEve(referenceDate) ||
    isEpiphany(referenceDate) ||
    isLabourDay(referenceDate) ||
    isNationalDay(referenceDate) ||
    isAllSaintsDay(referenceDate) ||
    isChristmasEve(referenceDate) ||
    isChristmasDay(referenceDate) ||
    isBoxingDay(referenceDate) ||
    isMidsummerEve(referenceDate) ||
    isMidsummerDay(referenceDate) ||
    isPentecost(referenceDate) ||
    isWhitsunEve(referenceDate) ||
    isEasterEve(referenceDate) ||
    isEasterSunday(referenceDate) ||
    isEasterMonday(referenceDate) ||
    isGoodFriday(referenceDate) ||
    isAscensionDay(referenceDate)
  );
}
