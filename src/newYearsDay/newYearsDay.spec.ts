import isNewYearsDay from ".";

test("isNewYearsDay", () => {
  expect(isNewYearsDay(new Date("2021-12-31"))).toBeFalsy();
  expect(isNewYearsDay(new Date("2022-01-01"))).toBeTruthy();
  expect(isNewYearsDay(new Date("2022-01-02"))).toBeFalsy();
});
