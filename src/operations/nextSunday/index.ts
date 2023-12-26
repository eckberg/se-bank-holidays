export default function nextSunday(referenceDate: Date = new Date()) {
  const date = new Date(+referenceDate);

  // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = date.getDay();

  // Calculate the difference between the next Sunday and the current day
  const difference = 7 - dayOfWeek;

  // Adjust the date by the calculated difference
  date.setDate(date.getDate() + difference);

  return date;
}
