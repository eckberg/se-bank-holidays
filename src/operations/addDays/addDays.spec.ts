import addDays from ".";

test("addDays", () => {
  expect(addDays(new Date("2021-11-24"), 0)).toEqual(new Date("2021-11-24"));
  expect(addDays(new Date("2021-11-24"), 1)).toEqual(new Date("2021-11-25"));
  expect(addDays(new Date("2021-11-24"), 2)).toEqual(new Date("2021-11-26"));
  expect(addDays(new Date("2021-11-30"), 1)).toEqual(new Date("2021-12-01"));
});
