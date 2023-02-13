/**
 * Version 2
 * Real code interview question
 */

const banknotes = [
  { 1: 10 },
  { 2: 2 },
  { 5: 5 },
  { 10: 2 },
  { 20: 1 },
  { 50: 5 },
  { 100: 10 },
  { 200: 1 },
];

const getBanknotes = (sum) => {
  // convert data structure of banknotes from [{ 200: 1 }, { 100: 2 }] to { 200: 1, 100: 2 }
  let banknotesObj = {};
  banknotes.forEach((banknote) => {
    banknotesObj = {
      ...banknotesObj,
      ...banknote,
    };
  });

  // get array of denominations
  const denominations = banknotes
    .map((item) => +Object.keys(item)[0])
    .sort((a, b) => b - a);

  // check if there's enough money
  let availableSum = 0;

  denominations.forEach((item) => availableSum += item * banknotesObj[item]);

  if (availableSum < sum) {
    console.log('There\'s not enough money in the ATM');
    return;
  }

  // Get money
  const resObj = {};
  denominations.forEach((item) => {
    while (sum > item && banknotesObj[item] > 0) {
      resObj[item] = resObj[item] > 0 ? ++resObj[item] : 1;
      banknotesObj[item]--;
      sum -= item;
    }
  });

  return resObj;
};

// expected res { 200: 1, 100: 2, 50: 1, 20: 1, 10: 2, 5: 1, 2: 1 }
const res = getBanknotes(497);

console.log(res);
