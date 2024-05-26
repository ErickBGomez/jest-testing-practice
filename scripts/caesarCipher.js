const caesarCipher = (text, shift = 0) => {
  const pattern = /[a-zA-z]/g;
  if (!pattern.test(text)) return text; // Don't convert when text is not a valid character

  // Convert string to array of ASCII codes, then add shift value to each character
  const asciiShifted = text.split("").map((char) => {
    const isUpper = char.toUpperCase() === char;
    const alphabetIndex = isUpper ? 65 : 97; // If upper case, use "A" to start counting the index, otherwise use "a"
    const index = (char.charCodeAt(0) - alphabetIndex + shift) % 26; // Wrap characters (z -> a)
    return index + alphabetIndex;
  });
  // Convert ASCII array to string
  return String.fromCharCode(...asciiShifted);
};

// console.log(String.fromCharCode("a".charCodeAt(0) + 3));

export default caesarCipher;
