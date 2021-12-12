import isBoxingDay from ".";

test("boxingDay", () => {
  expect(isBoxingDay(new Date("2022-12-24"))).toBeFalsy();
  expect(isBoxingDay(new Date("2022-12-25"))).toBeFalsy();
  expect(isBoxingDay(new Date("2022-12-26"))).toBeTruthy();
  expect(isBoxingDay(new Date("2022-12-27"))).toBeFalsy();
});
