import isHoliday from "../holiday";

export default function subDays(
  referenceDate: Date = new Date(),
  subDays: number,
  skipHolidays = false
) {
  const date = new Date(+referenceDate);

  let counter = 0;

  while (counter < subDays) {
    date.setUTCDate(date.getUTCDate() - 1);

    if (!skipHolidays || !isHoliday(date)) {
      counter++;
    }
  }

  return date;
}
