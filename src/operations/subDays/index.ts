export default function subDays(
  referenceDate: Date = new Date(),
  subDays: number,
) {
  const date = new Date(+referenceDate);

  let counter = 0;

  while (counter < subDays) {
    date.setUTCDate(date.getUTCDate() - 1);

    counter++;
  }

  return date;
}
