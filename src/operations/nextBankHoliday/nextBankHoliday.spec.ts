import nextBankHoliday from ".";

test("nextBankHoliday", () => {
  expect(nextBankHoliday(new Date("2021-12-12"))).toEqual(new Date("2021-12-12"));

  expect(nextBankHoliday(new Date("2022-06-20"))).toEqual(new Date("2022-06-24"));
});
