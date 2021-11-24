import isNewYearsEve from ".";

test("isNewYearsEve", () => {
  expect(isNewYearsEve(new Date("2022-12-30"))).toBeFalsy();
  expect(isNewYearsEve(new Date("2022-12-31"))).toBeTruthy();
  expect(isNewYearsEve(new Date("2023-01-01"))).toBeFalsy();
});
