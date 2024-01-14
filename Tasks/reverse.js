// Reverse dict, exchange keys and values
'use strict';

const reverseObj = (obj) => {
  //second variant using object methods
  //return Object.fromEntries(Object.entries(obj).map(([key,value])=>[value,key]));
  Object.keys(obj).forEach((key) => {
    obj[obj[key]] = key;
    delete obj[key];
  });
  return obj;
};

module.exports = reverseObj;
