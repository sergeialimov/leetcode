/*
* Description
* There is an ATM with banknote denominations of 100, 50, 20, 10, 5.
* The number of banknotes is unlimited.
* It is necessary to issue the least number of banknotes.
* The amount must be greater than zero and a multiple of the minimum banknoteΩ
*/

const handleAtmRequest = (sum) => {
  if (sum <= 0) {
    console.log('Please input an amount greater than zero');
    return;
  }

  if (sum % 5 !== 0) {
    console.log('Please input the amount in multiples of 5');
    return;
  }

  const denominations = [100, 50, 20, 10, 5];
  const res = [];

  denominations.forEach((denomination) => {
    while (sum >= denomination) {
      res.push(denomination);
      sum -= denomination;
    }
  });
  return res;
}

// handleAtmRequest(-1);
// handleAtmRequest(3);
const res = handleAtmRequest(375);
console.log(res);
