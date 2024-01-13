// Return an array without duplicates
'use strict';

const distinct = (data) => {
  return [...new Set(data)].filter
  (x => typeof x === 'number');
};

module.exports = distinct;
