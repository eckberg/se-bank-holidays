export default function startOfDay(referenceDate: Date = new Date()): Date {
  return new Date(new Date(+referenceDate).setUTCHours(0, 0, 0, 0));
}
