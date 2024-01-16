// Reverse dict, exchange keys and values
'use strict';

const reverseObj = (obj) => {
  //second variant using object methods
  //return Object.fromEntries(Object.entries(obj).map(([key,value])=>[value,key]));
  const reversedObj = {};
  Object.keys(obj).forEach((key) => {
    reversedObj[obj[key]] = key;
  });
  return reversedObj;
};

module.exports = reverseObj;
