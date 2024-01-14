// Return an array without duplicates
'use strict';

const distinctData = (data) => {
  return [...new Set(data)].filter
  (x => typeof x === 'number');
};

module.exports = distinctData;
