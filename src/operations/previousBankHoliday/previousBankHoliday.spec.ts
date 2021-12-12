import previousBankHoliday from ".";

test("previousBankHoliday", () => {
  expect(previousBankHoliday(new Date("2021-12-12"))).toEqual(
    new Date("2021-12-12")
  );
  expect(previousBankHoliday(new Date("2022-06-28"))).toEqual(
    new Date("2022-06-26")
  );
});
