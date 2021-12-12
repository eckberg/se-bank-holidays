import isLabourDay from ".";

test("isLabourDay", () => {
  expect(isLabourDay(new Date("2022-04-30"))).toBeFalsy();
  expect(isLabourDay(new Date("2022-05-01"))).toBeTruthy();
  expect(isLabourDay(new Date("2022-05-02"))).toBeFalsy();
});
