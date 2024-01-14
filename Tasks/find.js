// Find key by value
'use strict';

const findObjKey = (object, value) => {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findObjKey;
