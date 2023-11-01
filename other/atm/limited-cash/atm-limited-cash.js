/**
 * Version 1
 * https://javascript.plainenglish.io/javascript-algorithms-atm-cash-machine-e6ba293c711b
 */

const handleAtmRequest = (requiredSum, availableCash) => {

  const availableCashCopy = JSON.parse(JSON.stringify(availableCash));

  let requiredSumCopy = requiredSum;

  if (requiredSumCopy <= 0) throw new Error('\'Please input an amount greater than zero\'');
  if (requiredSumCopy % 5 !== 0) throw new Error('Please input the amount in multiples of 5');

  const denominations = (Object.keys(availableCashCopy))
    .map((x) => +x)
    .filter((x) => availableCashCopy[x] > 0)
    .sort((a, b) => b - a)

  // check for available sum
  let availableSum = 0;
  denominations.forEach((item) => availableSum += item * availableCashCopy[item]);

  if (availableSum < requiredSumCopy) throw new Error('There\'s not enough money in the ATM');

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

// const params = { required: 240, avaialable: { 100: 5, 80: 3, 20: 1 }, expected: [80, 80, 80]};
const params = { required: 375, avaialable: { 100: 5, 50: 3, 20: 20, 10: 5, 5: 1 }, expected: [100,100,100,50,20,5]};
// const params = { required: 800, avaialable: {100: 5, 50: 3}, expected: 'There\'s not enough money in the ATM' };

try {
  const res = handleAtmRequest(params.required, params.avaialable);
  console.log(res);
} catch (e) {
  console.log(e.message);
}
