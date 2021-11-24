export interface InternalDate {
  year: number;
  month: number;
  day: number;
  weekday:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  iso: string;
}

export default function toInternalDate(date: Date): InternalDate {
  const year = +new Intl.DateTimeFormat([], {
    timeZone: "Europe/Stockholm",
    year: "numeric",
  }).format(date);

  const month = +new Intl.DateTimeFormat([], {
    timeZone: "Europe/Stockholm",
    month: "numeric",
  }).format(date);

  const day = +new Intl.DateTimeFormat([], {
    timeZone: "Europe/Stockholm",
    day: "numeric",
  }).format(date);

  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Stockholm",
    weekday: "long",
  }).format(date) as InternalDate["weekday"];

  const iso = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  return { year, month, day, weekday, iso };
}
