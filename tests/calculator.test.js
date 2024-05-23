import calculator from "../scripts/calculator";

describe("Calculator tests", () => {
  test("Add: test 1", () => {
    expect(1 + 1).toBe(2);
  });

  test("Add: test 2", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test("Add: Negative numbers should substract", () => {
    expect(calculator.add(3, -2)).toBe(1);
  });

  test("Add: Neutral element (0)", () => {
    expect(calculator.add(10, 0)).toBe(10);
  });

  test("Substract: test 1", () => {
    expect(1 - 1).toBe(0);
  });

  test("Substract: test 2", () => {
    expect(calculator.substract(1, 1)).toBe(0);
  });

  test("Substract: Negative numbers should add", () => {
    expect(calculator.substract(3, -2)).toBe(5);
  });

  test("Substract: Neutral element (0)", () => {
    expect(calculator.substract(10, 0)).toBe(10);
  });

  test("Multiply: test 1", () => {
    expect(2 * 4).toBe(8);
  });

  test("Multiply: test 2", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test("Multiply: Negative operand times positive operand = Negative result", () => {
    expect(calculator.multiply(-2, 8)).toBe(-16);
  });

  test("Multiply: Both negative operands = Positive result", () => {
    expect(calculator.multiply(-10, -10)).toBe(100);
  });

  test("Multiply: Neutral element (1)", () => {
    expect(calculator.multiply(1000, 1)).toBe(1000);
  });

  test("Divide: test 1", () => {
    expect(8 / 4).toBe(2);
  });

  test("Divide: test 2", () => {
    expect(calculator.divide(8, 4)).toBe(2);
  });

  test("Divide: Negative operand times positive operand = Negative result", () => {
    expect(calculator.divide(10, -2)).toBe(-5);
  });

  test("Divide: Both negative operands = Positive result", () => {
    expect(calculator.divide(-4, -2)).toBe(2);
  });

  test("Divide: Neutral element (1)", () => {
    expect(calculator.divide(10, 1)).toBe(10);
  });
});
