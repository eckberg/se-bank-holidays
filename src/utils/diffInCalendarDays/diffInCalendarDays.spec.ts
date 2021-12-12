import diffInCalendarDays from "./";

test("diffInCalendarDays", () => {
  expect(
    diffInCalendarDays(new Date("2021-11-24"), new Date("2021-11-24"))
  ).toEqual(0);
  expect(
    diffInCalendarDays(new Date("2021-12-10"), new Date("2021-12-12"))
  ).toEqual(2);
  expect(
    diffInCalendarDays(new Date("2021-12-31"), new Date("2022-01-01"))
  ).toEqual(1);
});
