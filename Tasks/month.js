// Get month number
'use strict';

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthIndex = (month) => {
  month = month.toLowerCase();
  for (let currentMonth of months) {
    const index = months.indexOf(currentMonth);
    if (month.startsWith(currentMonth)) return index + 1;
  }
  return -1;
};

module.exports = getMonthIndex;
