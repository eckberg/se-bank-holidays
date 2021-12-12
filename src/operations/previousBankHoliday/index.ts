import { isHoliday } from "../..";
import subDays from "../subDays";

export default function previousBankHoliday(referenceDate: Date = new Date()) {
  let date = new Date(+referenceDate);

  if (isHoliday(date)) {
    return date;
  }

  while (!isHoliday(date)) {
    date = subDays(date, 1);
  }

  return date;
}
