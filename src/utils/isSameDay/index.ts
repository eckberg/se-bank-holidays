import startOfDay from "../../operations/startOfDay";

export default function isSameDay(left: Date, right: Date) {
  return +startOfDay(left) === +startOfDay(right);
}
