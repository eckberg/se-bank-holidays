import isChristmasDay from ".";

test("isChristmasDay", () => {
  expect(isChristmasDay(new Date("2022-12-24"))).toBeFalsy();
  expect(isChristmasDay(new Date("2022-12-25"))).toBeTruthy();
  expect(isChristmasDay(new Date("2022-12-26"))).toBeFalsy();
});
