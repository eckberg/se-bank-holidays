import isWhitsunEve from ".";

test("isWhitsunEve", () => {
  expect(isWhitsunEve(new Date("2021-05-21"))).toBeFalsy();
  expect(isWhitsunEve(new Date("2021-05-22"))).toBeTruthy();
  expect(isWhitsunEve(new Date("2021-05-23"))).toBeFalsy();
});
