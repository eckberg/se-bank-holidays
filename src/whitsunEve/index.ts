import { nextPentecost } from "../pentecost";
import isSameDay from "../utils/isSameDay";
import subDays from "../utils/subDays";

export default function isWhitsunEve(referenceDate: Date = new Date()) {
  const pentecost = nextPentecost(referenceDate);
  const whitsunEve = subDays(pentecost, 1);

  return isSameDay(referenceDate, whitsunEve);
}
