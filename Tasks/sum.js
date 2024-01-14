// Sum all numbers from an array
'use strict';

const sumArrNumbers = (arr) => {
  const arrNumbers = arr.filter((i) => typeof i === 'number');
  let sum = arrNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};

module.exports = sumArrNumbers;
