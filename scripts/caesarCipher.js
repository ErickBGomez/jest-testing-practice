const caesarCipher = (text, shift) => {
  // Convert string to array of ASCII codes, then add shift value to each character
  const map = text.split("").map((char) => char.charCodeAt(0) + shift);
  // Convert ASCII array to string
  return String.fromCharCode(...map);
};

// console.log(String.fromCharCode("a".charCodeAt(0) + 3));

export default caesarCipher;
