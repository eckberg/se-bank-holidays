import isSameDay from ".";

test("isSameDay", () => {
  expect(
    isSameDay(new Date("2021-11-24"), new Date("2021-11-24"))
  ).toBeTruthy();
  expect(isSameDay(new Date("2021-11-24"), new Date("2021-11-25"))).toBeFalsy();
});
