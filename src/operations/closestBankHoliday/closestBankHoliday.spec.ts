import closestBankHoliday from ".";

test("closestBankHoliday", () => {
  expect(closestBankHoliday(new Date("2021-12-11"))).toEqual(
    new Date("2021-12-11")
  );
  expect(closestBankHoliday(new Date("2021-12-13"))).toEqual(
    new Date("2021-12-12")
  );
  expect(closestBankHoliday(new Date("2022-01-12"))).toEqual(
    new Date("2022-01-15")
  );
});
