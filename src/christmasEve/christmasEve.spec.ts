import isChristmasEve from ".";

test("isChristmasEve", () => {
  expect(isChristmasEve(new Date("2022-12-23"))).toBeFalsy();
  expect(isChristmasEve(new Date("2022-12-24"))).toBeTruthy();
  expect(isChristmasEve(new Date("2022-12-25"))).toBeFalsy();
});
