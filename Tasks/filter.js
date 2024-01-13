// Filter array by type name
'use strict';

const filter = (array, dataType) => {
  const filteredArr = [];
  for (C of array) {
    x = array.indexOf(C);
    if (typeof array[x] !== dataType) {
      remove.unshift(x);
    }
  }
  for (x of remove) array.splice(x, 1);
  return array;
};

module.exports = Filter;
