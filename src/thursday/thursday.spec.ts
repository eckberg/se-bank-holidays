import { isThursday } from ".";

test("isThursday", () => {
  expect(isThursday(new Date("2021-11-24"))).toBeFalsy();
  expect(isThursday(new Date("2021-11-25"))).toBeTruthy();
  expect(isThursday(new Date("2021-11-26"))).toBeFalsy();
});
