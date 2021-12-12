import isAllSaintsDay from ".";

test("allSaintsDay", () => {
  expect(isAllSaintsDay(new Date("2021-11-23"))).toBeFalsy();
  expect(isAllSaintsDay(new Date("2021-11-06"))).toBeTruthy();
  expect(isAllSaintsDay(new Date("2022-11-05"))).toBeTruthy();
  expect(isAllSaintsDay(new Date("2022-11-06"))).toBeFalsy();
});
