import isGoodFriday from ".";

test("isGoodFriday", () => {
  expect(isGoodFriday(new Date("2022-04-14"))).toBeFalsy();
  expect(isGoodFriday(new Date("2022-04-15"))).toBeTruthy();
  expect(isGoodFriday(new Date("2022-04-16"))).toBeFalsy();
});
