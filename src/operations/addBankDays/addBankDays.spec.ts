import addBankDays from ".";

test("addBankDays", () => {
  expect(addBankDays(new Date("2021-12-12"), 1)).toEqual(
    new Date("2021-12-13")
  );
  expect(addBankDays(new Date("2021-12-11"), 1)).toEqual(
    new Date("2021-12-13")
  );
  expect(addBankDays(new Date("2021-12-10"), 1)).toEqual(
    new Date("2021-12-13")
  );
});
