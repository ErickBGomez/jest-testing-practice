import caesarCipher from "../scripts/caesarCipher";

describe("Caesar cipher tests", () => {
  test("Should return def", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  test("Should return DEF", () => {
    expect(caesarCipher("ABC", 3)).toBe("DEF");
  });

  test("Should wrap letters: abc", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("Don't convert non-valid characters", () => {
    expect(caesarCipher("100", 10)).toBe("100");
  });
});
