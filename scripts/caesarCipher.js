const caesarCipher = (text, shift) => {
  const map = text.split("").map((char) => char.charCodeAt(0) + shift);
  const shifted = String.fromCharCode(...map);

  return shifted;
};

// console.log(String.fromCharCode("a".charCodeAt(0) + 3));

export default caesarCipher;
