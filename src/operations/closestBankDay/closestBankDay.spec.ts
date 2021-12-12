import closestBankDay from ".";

test("closestBankDay", () => {
  expect(closestBankDay(new Date("2021-12-10"))).toEqual(
    new Date("2021-12-10")
  );
  expect(closestBankDay(new Date("2021-12-11"))).toEqual(
    new Date("2021-12-10")
  );
  expect(closestBankDay(new Date("2021-12-12"))).toEqual(
    new Date("2021-12-13")
  );
  expect(closestBankDay(new Date("2022-01-01"))).toEqual(
    new Date("2022-01-03")
  );
});
