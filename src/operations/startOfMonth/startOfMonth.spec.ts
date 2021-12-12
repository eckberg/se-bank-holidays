import startOfMonth from ".";

test("startOfMonth", () => {
  expect(startOfMonth(new Date("2020-01-01"))).toEqual(new Date("2020-01-01"));
  expect(startOfMonth(new Date("2021-11-24"))).toEqual(new Date("2021-11-01"));
  expect(startOfMonth(new Date("2021-12-31"))).toEqual(new Date("2021-12-01"));
});
