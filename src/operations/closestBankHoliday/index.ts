import diffInCalendarDays from "../../utils/diffInCalendarDays";
import nextBankHoliday from "../nextBankHoliday";
import previousBankHoliday from "../previousBankHoliday";

export default function closestBankHoliday(referenceDate: Date = new Date()) {
  let date = new Date(+referenceDate);

  const prev = previousBankHoliday(date);
  const next = nextBankHoliday(date);

  const prevDiff = diffInCalendarDays(date, prev)
  const nextDiff = diffInCalendarDays(date, next)

  return prevDiff < nextDiff ? prev : next
}
