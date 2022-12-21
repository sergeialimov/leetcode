/**
 * Version 1
 * https://javascript.plainenglish.io/javascript-algorithms-atm-cash-machine-e6ba293c711b
 */

const handleAtmRequest = (requiredSum, availableCash) => {

  const availableCashCopy = JSON.parse(JSON.stringify(availableCash));

  let requiredSumCopy = requiredSum;

  if (requiredSumCopy <= 0) {
    console.log('Please input an amount greater than zero');
    return;
  }

  if (requiredSumCopy % 5 !== 0) {
    console.log('Please input the amount in multiples of 5');
    return;
  }

  const denominations = (Object.keys(availableCashCopy))
    .map((x) => +x)
    .filter((x) => availableCashCopy[x] > 0)
    .sort((a, b) => b - a)


  // check for available sum
  let availableSum = 0;
  denominations.forEach((item) => availableSum += item * availableCashCopy[item]);
  if (availableSum < requiredSumCopy) {
    console.log('There\'s not enough money in the ATM');
    return null;
  }

  // getting money
  let res = [];

  denominations.forEach((denomination) => {
    while (requiredSumCopy >= denomination && availableCashCopy[denomination] > 0) {
      res.push(denomination);
      availableCashCopy[denomination]--;
      requiredSumCopy -= denomination;
    }
  });

  // check if sum is correct
  const sum = res.reduce((acc, next) => acc += next);
  if (sum !== requiredSum) {
    // reduce requiredSum and rerun
    for (let i = 0; i < denominations.length - 1; i++) {
      const el = denominations[i];
      if (availableCash[el] > 0) {
        availableCash[el]--;
        res = [];
        return handleAtmRequest(requiredSum, availableCash);
      }
    }
  }

  return res;
}


// const res3 = handleAtmRequest(240, { 100: 5, 80: 3, 20: 1 });
// console.log(res3)








// const res = handleAtmRequest(375, { 100: 5, 50: 3, 20: 20, 10: 5, 5: 1 });
// expected res [100,100,100,50,20,5]
// console.log(res);

const res2 = handleAtmRequest(800, {100: 5, 50: 3});
// There's not enough money in the ATM
console.log(res2)