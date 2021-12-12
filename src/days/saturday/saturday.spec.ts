import { isSaturday } from ".";

test("isSaturday", () => {
  expect(isSaturday(new Date("2021-11-26"))).toBeFalsy();
  expect(isSaturday(new Date("2021-11-27"))).toBeTruthy();
  expect(isSaturday(new Date("2021-11-28"))).toBeFalsy();
});
