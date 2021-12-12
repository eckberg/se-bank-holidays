import diffInCalendarDays from "../../utils/diffInCalendarDays";
import nextBankDay from "../nextBankDay";
import previousBankDay from "../previousBankDay";

export default function closestBankDay(referenceDate: Date = new Date()) {
  let date = new Date(+referenceDate);

  const prev = previousBankDay(date);
  const next = nextBankDay(date);

  const prevDiff = diffInCalendarDays(date, prev);
  const nextDiff = diffInCalendarDays(date, next);

  return prevDiff < nextDiff ? prev : next;
}
