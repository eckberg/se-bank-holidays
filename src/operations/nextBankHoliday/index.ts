import { isHoliday } from "../..";
import addDays from "../addDays";

export default function nextBankHoliday(referenceDate: Date = new Date()) {
  let date = new Date(+referenceDate);

  if (isHoliday(date)) {
    return date;
  }

  while (!isHoliday(date)) {
    date = addDays(date, 1);
  }

  return date;
}
