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
// GetBanknotes(497) => {
//   200: 1, 100: 2, 50: 1, 20: 1, 10: 2, 5: 1, 2: 1 }

const getBanknotes = (sum) => {
  // Convert to more convenient data structure
  let banknotesObj = {};
  banknotes.forEach((banknote) => {
    banknotesObj = {
      ...banknotesObj,
      ...banknote,
    };
  });

  // Check if there's enough money
  let availableSum = 0;
  const banknotesArr = Object.keys(banknotesObj).sort((a, b) => b - a);
  console.log('banknotesArr', banknotesArr);
  banknotesArr.forEach((item) => {
    availableSum += Number(item) * banknotesObj[item];
  });

  // Get money
  const res = [];
  banknotesArr.forEach((item) => {
    while (sum > item && banknotesObj[item] > 0) {
      res.push(item);
      banknotesObj[item]--;
    }
  });

  console.log('banknotesObj', banknotesObj);
  console.log('availableSum', availableSum);
  console.log('res', res);
  return res;
};

getBanknotes(497);

// Banknotes.forEach((banknote) => {
//   const key = (Object.keys(banknote))[0];
//   availableSum += +key * banknote[key];
// });
//
// if (sum > availableSum) {
//   console.log('Not enough money in the ATM');
// }
//
// // get money
// const denominations = banknotes.map((banknote) => +((Object.keys(banknote))[0]));
// const res = [];
//
// denominations.forEach((denomination) => {
//   while (sum > denomination && banknotes.find(denomination)) {
//
//   }
// });
// console.log(availableSum)
