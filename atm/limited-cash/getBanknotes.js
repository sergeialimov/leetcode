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

  const banknotesArr = banknotes
    .map((item) => +Object.keys(item)[0])
    .sort((a, b) => b - a);

  // check if there's enough money
  let availableSum = 0;

  banknotesArr.forEach((item) => {
    availableSum += Number(item) * banknotesObj[item];
  });

  if (availableSum < sum) {
    console.log('There\'s not enough money');
    return;
  }

  // Get money
  const resObj = {};
  banknotesArr.forEach((item) => {
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
