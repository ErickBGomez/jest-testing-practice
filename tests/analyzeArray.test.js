import analyzeArray from "../scripts/analyzeArray";

describe("Analyze array tests", () => {
  test("analyzing 1", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("analyzing 2", () => {
    expect(analyzeArray([0, 5, 7, 10, 4, 1, 3, 2])).toStrictEqual({
      average: 4,
      min: 0,
      max: 10,
      length: 8,
    });
  });

  test("Same values", () => {
    expect(analyzeArray([2, 2, 2, 2, 2])).toStrictEqual({
      average: 2,
      min: 2,
      max: 2,
      length: 5,
    });
  });

  test("Consecutive", () => {
    expect(analyzeArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual({
      average: 4.5,
      min: 0,
      max: 9,
      length: 10,
    });
  });

  test("All negatives", () => {
    expect(analyzeArray([-10, -11, -22, -5, -4, -8])).toStrictEqual({
      average: -10,
      min: -22,
      max: -4,
      length: 6,
    });
  });
});
