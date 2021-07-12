import { range } from '.';

type CheckParams = {
  args: Parameters<typeof range>;
  expected: Array<number>;
}

const check = ({ args, expected }: CheckParams) => {
  expect(Array.from(range(...args))).toEqual(expected);
};

describe("range function", () => {
  test("should support two arguments", () => {
    check({
      args: [1, 5],
      expected: [1, 2, 3, 4]
    });
  });

  test("should support `step` argument", () => {
    check({
      args: [1, 10, 3],
      expected: [1, 4, 7]
    });
  });

  test("should work with one argument", () => {
    check({
      args: [3],
      expected: [0, 1, 2]
    });
  });

  test("should return valid array, when second argument is falsy", () => {
    check({
      args: [-5, 0],
      expected: [-5, -4, -3, -2, -1]
    });
  });

  test("should support negative `step` argument", () => {
    check({
      args: [5, 0, -1],
      expected: [5, 4, 3, 2, 1]
    });
    check({
      args: [5, 0, -2],
      expected: [5, 3, 1]
    });
    check({
      args: [6, 0, -2],
      expected: [6, 4, 2]
    });
    check({
      args: [5, 0, -3],
      expected: [5, 2]
    });
    check({
      args: [6, 0, -3],
      expected: [6, 3]
    });
    check({
      args: [7, 0, -3],
      expected: [7, 4, 1]
    });
  });

  test("should return empty array for 0", () => {
    check({
      args: [0],
      expected: []
    });
  });

  test("should return empty array for negative `start`", () => {
    check({
      args: [-3],
      expected: []
    });
  });
});
