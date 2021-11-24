import isHoliday from "../holiday";

export default function addDays(
  referenceDate: Date = new Date(),
  addDays: number,
  skipHolidays = false
) {
  const date = new Date(+referenceDate);

  let counter = 0;

  while (counter < addDays) {
    date.setUTCDate(date.getUTCDate() + 1);

    if (!skipHolidays || !isHoliday(date)) {
      counter++;
    }
  }

  return date;
}
