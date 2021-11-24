import { isFriday } from ".";

test("isFriday", () => {
  expect(isFriday(new Date("2021-11-25"))).toBeFalsy();
  expect(isFriday(new Date("2021-11-26"))).toBeTruthy();
  expect(isFriday(new Date("2021-11-27"))).toBeFalsy();
});
