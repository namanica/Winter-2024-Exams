// Reverse an array, you can't use .reverse()
'use strict';

const invertArr = (arr) => {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};

module.exports = invertArr;
