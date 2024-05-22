import capitalize from "../scripts/capitalize.js";

describe("capitalize tests", () => {
  test("return Erick", () => {
    expect(capitalize("erick")).toBe("Erick");
  });
});
