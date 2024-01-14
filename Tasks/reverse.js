// Reverse dict, exchange keys and values
'use strict';

const reverseObj = (obj) => {
  Object.keys(obj).forEach((key) => {
    obj[obj[key]] = key;
    delete obj[key];
  });
  return obj;
};

module.exports = reverseObj;
