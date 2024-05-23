const calculator = (() => {
  const add = (x, y) => x + y;
  const substract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => x / y;

  return { add, substract, multiply, divide };
})();

export default calculator;
