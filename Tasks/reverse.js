// Reverse dict, exchange keys and values
'use strict';

const reverseObj = (obj) => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    obj[value] = key;
    delete obj[key];
  });
  return obj;
};

module.exports = reverseObj;
