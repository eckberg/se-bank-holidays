import endOfMonth from ".";

test("endOfMonth", () => {
  expect(endOfMonth(new Date("2021-11-24"))).toEqual(new Date("2021-11-30"));
  expect(endOfMonth(new Date("2021-02-01"))).toEqual(new Date("2021-02-28"));
  expect(endOfMonth(new Date("2023-08-31"))).toEqual(new Date("2023-08-31"));
});
