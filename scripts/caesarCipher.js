const caesarCipher = (text, shift = 0) => {
  // Replace only letters (avoid numbers and special characters)
  return text.replace(/[a-zA-z]/g, (char) => {
    const isUpper = char.toUpperCase() === char;
    const reference = isUpper ? 65 : 97; // If upper case, use "A" as reference of counting the index, otherwise use "a"
    const index = (char.charCodeAt(0) - reference + shift) % 26; // Wrap characters (z -> a)
    return String.fromCharCode(index + reference); // Convert ASCII to character
  });
};

export default caesarCipher;
