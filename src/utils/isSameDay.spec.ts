import isSameDay from "./isSameDay";

test("isSameDay", () => {
  expect(
    isSameDay(new Date("2021-11-24"), new Date("2021-11-24"))
  ).toBeTruthy();
  expect(isSameDay(new Date("2021-11-24"), new Date("2021-11-25"))).toBeFalsy();

  // expect(isSameDay(new Date('2021-11-24 10:00'), new Date('2021-11-24 23:00'))).toBeTruthy()
  // expect(isSameDay(new Date('2021-11-24 14:00'), new Date('2021-11-25 02:00'))).toBeFalsy()
});
