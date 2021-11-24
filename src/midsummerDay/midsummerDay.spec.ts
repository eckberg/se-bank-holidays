import isMidsummerDay from ".";

test("isMidsummerDay", () => {
  expect(isMidsummerDay(new Date("2022-06-24"))).toBeFalsy();
  expect(isMidsummerDay(new Date("2022-06-25"))).toBeTruthy();
  expect(isMidsummerDay(new Date("2022-06-26"))).toBeFalsy();
});
