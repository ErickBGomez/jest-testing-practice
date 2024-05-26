// If upper case, use "A" as reference of counting the index, otherwise use "a"
const getRefIndex = (char) => (char.toUpperCase() === char ? 65 : 97);

// Shift character based on their ASCII and reference index
// then wrap characters if necessary (z -> a)
const charToIndex = (char, reference, shift, wrapFactor) =>
  (char.charCodeAt(0) - reference + shift) % wrapFactor;

const caesarCipher = (text, shift = 0) => {
  // Replace only letters (avoid numbers and special characters)
  return text.replace(/[a-zA-z]/g, (char) => {
    const reference = getRefIndex(char);
    const index = charToIndex(char, reference, shift, 26);
    return String.fromCharCode(index + reference); // Convert ASCII to character
  });
};

export default caesarCipher;
