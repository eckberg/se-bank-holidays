import isWeekend from ".";

test("isWeekend", () => {
  expect(isWeekend(new Date("2021-11-26"))).toBeFalsy();
  expect(isWeekend(new Date("2021-11-27"))).toBeTruthy();
  expect(isWeekend(new Date("2021-11-28"))).toBeTruthy();
  expect(isWeekend(new Date("2021-11-29"))).toBeFalsy();
});
