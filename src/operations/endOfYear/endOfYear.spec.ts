import endOfYear from ".";

test("endOfYear", () => {
  expect(endOfYear(new Date("2020-01-01"))).toEqual(new Date("2020-12-31"));
  expect(endOfYear(new Date("2021-11-24"))).toEqual(new Date("2021-12-31"));
  expect(endOfYear(new Date("2021-12-31"))).toEqual(new Date("2021-12-31"));
});
