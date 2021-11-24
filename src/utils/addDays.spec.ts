import addDays from "./addDays";

test("addDays", () => {
  expect(addDays(new Date("2021-11-24"), 1)).toEqual(new Date("2021-11-25"));
  expect(addDays(new Date("2021-11-24"), 2)).toEqual(new Date("2021-11-26"));
  expect(addDays(new Date("2021-12-22"), 10, true)).toEqual(
    new Date("2022-01-10")
  );
});
