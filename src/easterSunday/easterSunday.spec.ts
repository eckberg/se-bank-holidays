import isEasterSunday, { nextEasterSunday } from ".";

test("isEasterSunday", () => {
  expect(isEasterSunday(new Date("2021-04-03"))).toBeFalsy();
  expect(isEasterSunday(new Date("2021-04-04"))).toBeTruthy();
  expect(isEasterSunday(new Date("2021-04-05"))).toBeFalsy();

  expect(isEasterSunday(new Date("2022-04-16"))).toBeFalsy();
  expect(isEasterSunday(new Date("2022-04-17"))).toBeTruthy();
  expect(isEasterSunday(new Date("2022-04-18"))).toBeFalsy();
});

test("nextEastersunday", () => {
  expect(nextEasterSunday(new Date("2021-03-10"))).toEqual(
    new Date("2021-04-04")
  );
  expect(nextEasterSunday(new Date("2021-04-04"))).toEqual(
    new Date("2021-04-04")
  );
  expect(nextEasterSunday(new Date("2021-04-05"))).toEqual(
    new Date("2022-04-17")
  );
});
