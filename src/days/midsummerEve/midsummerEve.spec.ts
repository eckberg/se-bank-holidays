import isMidsummerEve from ".";

test("isMidsummerEve", () => {
  expect(isMidsummerEve(new Date("2022-06-23"))).toBeFalsy();
  expect(isMidsummerEve(new Date("2022-06-24"))).toBeTruthy();
  expect(isMidsummerEve(new Date("2022-06-25"))).toBeFalsy();
});
