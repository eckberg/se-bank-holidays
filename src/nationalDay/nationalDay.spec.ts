import isNationalDay from ".";

test("isNationalDay", () => {
  expect(isNationalDay(new Date("2022-06-05"))).toBeFalsy();
  expect(isNationalDay(new Date("2022-06-06"))).toBeTruthy();
  expect(isNationalDay(new Date("2022-06-07"))).toBeFalsy();
});
