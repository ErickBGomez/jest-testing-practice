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

  test("Don't convert when shift is 0", () => {
    expect(caesarCipher("abc", 0)).toBe("abc");
  });

  test("Don't convert non-valid characters", () => {
    expect(caesarCipher("100", 10)).toBe("100");
  });

  test("Simple words: HeLLo", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("Complex words and avoid symbols", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
