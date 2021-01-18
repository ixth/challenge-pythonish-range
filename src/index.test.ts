import { range } from ".";

describe("range function", () => {
  test("should basically work", () => {
    expect(range(3)).toEqual([0, 1, 2]);
  });

  test("should support two arguments", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  test("should return empty array for 0", () => {
    expect(range(0)).toEqual([]);
  });

  test("should return empty array for negative `start`", () => {
    expect(range(-3)).toEqual([]);
  });

  test("should support `step` argument", () => {
    expect(range(1, 10, 3)).toEqual([1, 4, 7]);
  });

  test("should support negative `step` argument", () => {
    expect(range(5, -5, -3)).toEqual([5, 2, -1, -4]);
  });
});
