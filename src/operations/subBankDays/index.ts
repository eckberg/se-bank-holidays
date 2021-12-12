import { isHoliday } from "../..";

export default function subBankDays(
  referenceDate: Date = new Date(),
  days: number
) {
  const date = new Date(+referenceDate);

  let counter = 0;

  while (counter < days) {
    date.setUTCDate(date.getUTCDate() - 1);

    if (!isHoliday(date)) {
      counter++;
    }
  }

  return date;
}
