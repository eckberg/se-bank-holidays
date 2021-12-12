import isEpiphany from ".";

test("isEpiphany", () => {
  expect(isEpiphany(new Date("2022-01-05"))).toBeFalsy();
  expect(isEpiphany(new Date("2022-01-06"))).toBeTruthy();
  expect(isEpiphany(new Date("2022-01-07"))).toBeFalsy();
});
