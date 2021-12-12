import isPentecost, { nextPentecost } from ".";

test("isPentecost", () => {
  expect(isPentecost(new Date("2021-05-22"))).toBeFalsy();
  expect(isPentecost(new Date("2021-05-23"))).toBeTruthy();
  expect(isPentecost(new Date("2021-05-24"))).toBeFalsy();

  expect(isPentecost(new Date("2022-06-04"))).toBeFalsy();
  expect(isPentecost(new Date("2022-06-05"))).toBeTruthy();
  expect(isPentecost(new Date("2022-06-06"))).toBeFalsy();
});

test("nextPentecost", () => {
  expect(nextPentecost(new Date("2021-05-20"))).toEqual(new Date("2021-05-23"));
  expect(nextPentecost(new Date("2021-05-23"))).toEqual(new Date("2021-05-23"));
  expect(nextPentecost(new Date("2021-05-24"))).toEqual(new Date("2022-06-05"));
});
