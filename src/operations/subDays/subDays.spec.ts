import subDays from ".";

test("subDays", () => {
  expect(subDays(new Date("2021-11-24"), 0)).toEqual(new Date("2021-11-24"));
  expect(subDays(new Date("2021-11-24"), 1)).toEqual(new Date("2021-11-23"));
  expect(subDays(new Date("2021-11-24"), 2)).toEqual(new Date("2021-11-22"));
  expect(subDays(new Date("2021-12-30"), 5)).toEqual(new Date("2021-12-25"));
});
