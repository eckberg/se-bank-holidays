import nextBankDay from ".";

test("nextBankDay", () => {
  expect(nextBankDay(new Date("2021-12-12"))).toEqual(new Date("2021-12-13"));
  expect(nextBankDay(new Date("2022-06-20"))).toEqual(new Date("2022-06-20"));
});
