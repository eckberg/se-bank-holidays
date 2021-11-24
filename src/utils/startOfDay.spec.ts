import startOfDay from "./startOfDay";

test("startOfDay", () => {
  expect(startOfDay(new Date("2021-11-24 10:00"))).toEqual(
    new Date("2021-11-24")
  );
});
