import previousBankDay from ".";

test("previousBankDay", () => {
  expect(previousBankDay(new Date("2021-12-12"))).toEqual(new Date("2021-12-10"));
  expect(previousBankDay(new Date("2022-06-20"))).toEqual(new Date("2022-06-20"));
});
