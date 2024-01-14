// Count types in an array
'use strict';

const countTypes =  (data) => {
  const typesInit = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of data) {
    typesInit[typeof i]++;
  }
  return typesInit;
};

module.exports = countTypes;
