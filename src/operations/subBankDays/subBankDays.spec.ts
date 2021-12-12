import subBankDays from ".";

test("subBankDays", () => {
  expect(subBankDays(new Date("2021-12-12"), 1)).toEqual(
    new Date("2021-12-10")
  );
  expect(subBankDays(new Date("2021-12-10"), 0)).toEqual(
    new Date("2021-12-10")
  );
  expect(subBankDays(new Date("2021-12-10"), 2)).toEqual(
    new Date("2021-12-08")
  );
  expect(subBankDays(new Date("2021-12-30"), 5)).toEqual(
    new Date("2021-12-22")
  );
  expect(subBankDays(new Date("2021-12-30"), 20)).toEqual(
    new Date("2021-12-01")
  );
});
