import { range } from '.';

describe("range function", () => {
  test("should support two arguments", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  test("should support `step` argument", () => {
    expect(range(1, 10, 3)).toEqual([1, 4, 7]);
  });

  test("should work with one argument", () => {
    expect(range(3)).toEqual([0, 1, 2]);
  });

  test("should return valid array, when second argument is falsy", () => {
    expect(range(-5, 0)).toEqual([-5, -4, -3, -2, -1]);
  });

  test("should support negative `step` argument", () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
    expect(range(5, 0, -2)).toEqual([5, 3, 1]);
    expect(range(6, 0, -2)).toEqual([6, 4, 2]);
    expect(range(5, 0, -3)).toEqual([5, 2]);
    expect(range(6, 0, -3)).toEqual([6, 3]);
    expect(range(7, 0, -3)).toEqual([7, 4, 1]);
  });

  test("should return empty array for 0", () => {
    expect(range(0)).toEqual([]);
  });

  test("should return empty array for negative `start`", () => {
    expect(range(-3)).toEqual([]);
  });
});
