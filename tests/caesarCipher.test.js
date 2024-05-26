import caesarCipher from "../scripts/caesarCipher";

describe("Caesar cipher tests", () => {
  test("Should return def", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  test("Should return DEF", () => {
    expect(caesarCipher("ABC", 3)).toBe("DEF");
  });
});
