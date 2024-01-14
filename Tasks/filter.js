// Filter array by type name
'use strict';

const filterArr = (array, dataType) => {
  const filteredArr = [];
  for (let el of array) {
    if (typeof el === dataType) {
      filteredArr.push(el);
    }
  }
  return filteredArr;
};

module.exports = filterArr;
