const caesarCipher = (text, shift) => {
  const pattern = /[a-zA-z]/g;
  if (!pattern.test(text)) return text; // Don't convert when text is not a valid character

  // Convert string to array of ASCII codes, then add shift value to each character
  const map = text.split("").map((char) => char.charCodeAt(0) + shift);
  // Convert ASCII array to string
  return String.fromCharCode(...map);
};

// console.log(String.fromCharCode("a".charCodeAt(0) + 3));

export default caesarCipher;
