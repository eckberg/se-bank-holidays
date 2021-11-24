import subDays from "./subDays";

test("subDays", () => {
  expect(subDays(new Date("2021-11-24"), 1)).toEqual(new Date("2021-11-23"));
  expect(subDays(new Date("2021-11-24"), 2)).toEqual(new Date("2021-11-22"));

  expect(subDays(new Date("2021-11-23"), 5, true)).toEqual(
    new Date("2021-11-16")
  );

  expect(subDays(new Date("2021-11-30"), 20, true)).toEqual(
    new Date("2021-11-02")
  );
  expect(subDays(new Date("2021-12-30"), 5, true)).toEqual(
    new Date("2021-12-22")
  );
  expect(subDays(new Date("2021-12-30"), 20, true)).toEqual(
    new Date("2021-12-01")
  );

  expect(subDays(new Date("2022-01-01"), 1, true)).toEqual(
    new Date("2021-12-30")
  );
});
