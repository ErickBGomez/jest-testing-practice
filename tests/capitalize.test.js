import capitalize from "../scripts/capitalize.js";

describe("capitalize tests", () => {
  test("Return Erick", () => {
    expect(capitalize("erick")).toBe("Erick");
  });

  test("Already capitalized strings will not change", () => {
    expect(capitalize("Armorer")).toBe("Armorer");
  });

  test("String in uppercase will not change", () => {
    expect(capitalize("SELECT")).toBe("SELECT");
  });

  test("Only capitalize first word for long strings", () => {
    expect(capitalize("this is my beautiful string")).toBe(
      "This is my beautiful string"
    );
  });
});
