import isEasterMonday from ".";

test("isEasterMonday", () => {
  expect(isEasterMonday(new Date("2022-04-17"))).toBeFalsy();
  expect(isEasterMonday(new Date("2022-04-18"))).toBeTruthy();
  expect(isEasterMonday(new Date("2022-04-19"))).toBeFalsy();
});
