// Return an array with duplicates
'use strict';

const duplicateValue = (value, number) => {
  //second variant using array methods
  //return [...Array(number).keys()].map(el=> value);
  if (number <= 0) return [];
  const res = [];
  for (let i = 0; i < number; i++) {
    res[i] = value;
  }
  return res;
};

module.exports = duplicateValue;
