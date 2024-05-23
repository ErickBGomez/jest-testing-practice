import reverseString from "../scripts/reverseString";

describe("Reverse string tests", () => {
  test("Return nruteR", () => {
    expect("nruteR").toBe("nruteR");
  });

  test("Return kcirE", () => {
    expect(reverseString("Erick")).toBe("kcirE");
  });

  test("Palindrome words are not affected", () => {
    expect(reverseString("rotator")).toBe("rotator");
  });
});
