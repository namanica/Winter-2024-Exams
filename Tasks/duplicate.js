// Return an array with duplicates
'use strict';

const duplicate = (value, number) => {
  if (number <= 0) {
    return [];
  } else {
    //second variant using array methods
    //return [...Array(number).keys()].map(el=> value);
    const res = [];
    for (let i = 0; i < number; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = duplicate;
