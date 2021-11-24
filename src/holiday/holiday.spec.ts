import isHoliday from ".";

test("isHoliday", () => {
  expect(isHoliday(new Date("2021-11-24"))).toBeFalsy();
  expect(isHoliday(new Date("2021-12-24"))).toBeTruthy();
});
