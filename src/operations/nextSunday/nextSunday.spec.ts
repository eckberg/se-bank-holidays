import nextSunday from ".";

test("nextSunday", () => {
  expect(nextSunday(new Date("2023-12-26"))).toEqual(new Date("2023-12-31"));
  expect(nextSunday(new Date("2024-06-15"))).toEqual(new Date("2024-06-16"));
  expect(nextSunday(new Date("2024-08-11"))).toEqual(new Date("2024-08-18"));
});
