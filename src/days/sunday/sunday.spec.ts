import { isSunday } from ".";

test("isSunday", () => {
  expect(isSunday(new Date("2021-11-27"))).toBeFalsy();
  expect(isSunday(new Date("2021-11-28"))).toBeTruthy();
  expect(isSunday(new Date("2021-11-29"))).toBeFalsy();
});
