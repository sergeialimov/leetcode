/**
 * Version 1
 * https://javascript.plainenglish.io/javascript-algorithms-atm-cash-machine-e6ba293c711b
 */

const handleAtmRequest = (requiredSum, availableCash) => {
  if (requiredSum <= 0) {
    console.log('Please input an amount greater than zero');
    return;
  }

  if (requiredSum % 5 !== 0) {
    console.log('Please input the amount in multiples of 5');
    return;
  }

  const denominations = (Object.keys(availableCash))
    .map((x) => +x)
    .sort((a, b) => b - a);

  // check for available sum
  let availableSum = 0;
  denominations.forEach((item) => availableSum += item * availableCash[item]);
  if (availableSum < requiredSum) {
    console.log('There\'s not enough money in the ATM');
    return null;
  }

  // getting money
  const res = [];

  denominations.forEach((denomination) => {
    while (requiredSum >= denomination && availableCash[denomination] > 0) {
      res.push(denomination);
      availableCash[denomination]--;
      requiredSum -= denomination;
    }
  });

  return res;
}

// const res = handleAtmRequest(375, { 100: 5, 50: 3, 20: 20, 10: 5, 5: 1 });
// expected res [100,100,100,50,20,5]
// console.log(res);

// const res2 = handleAtmRequest(800, {100: 5, 50: 3});
// There's not enough money in the ATM
// console.log(res2)

const res3 = handleAtmRequest(240, {100: 5, 80: 3, 20: 1});
//
console.log(res3)
