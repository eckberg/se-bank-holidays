import isAscensionDay from ".";

test("ascensionDay", () => {
  expect(isAscensionDay(new Date("2021-11-23"))).toBeFalsy();
  expect(isAscensionDay(new Date("2022-05-26"))).toBeTruthy();
});
