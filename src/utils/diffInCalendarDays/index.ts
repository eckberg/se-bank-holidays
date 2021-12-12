import { startOfDay } from "../..";

export default function diffInCalendarDays(left: Date, right: Date) {
  return Math.abs(
    Math.round((+startOfDay(right) - +startOfDay(left)) / 86400000)
  );
}
