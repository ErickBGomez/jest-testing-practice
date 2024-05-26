const getMin = (array) => Math.min(...array);

const getMax = (array) => Math.max(...array);

// Sum all elements and divide by array length
const getAverage = (array) => array.reduce((a, num) => a + num) / array.length;

const getLength = (array) => array.length;

const analyzeArray = (array) => {
  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: getLength(array),
  };
};

export default analyzeArray;
