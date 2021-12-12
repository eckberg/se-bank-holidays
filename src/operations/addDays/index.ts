export default function addDays(
  referenceDate: Date = new Date(),
  addDays: number,
) {
  const date = new Date(+referenceDate);

  let counter = 0;

  while (counter < addDays) {
    date.setUTCDate(date.getUTCDate() + 1);

    counter++
  }

  return date;
}
