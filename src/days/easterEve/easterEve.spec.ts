import isEasterEve from ".";

test("isEasterEve", () => {
  expect(isEasterEve(new Date("2022-04-15"))).toBeFalsy();
  expect(isEasterEve(new Date("2022-04-16"))).toBeTruthy();
  expect(isEasterEve(new Date("2022-04-17"))).toBeFalsy();
});
