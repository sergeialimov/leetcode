const handleAtmRequest = (sum, availableCash) => {
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
    while (sum >= denomination && availableCash[denomination] > 0) {
      res.push(denomination);
      availableCash[denomination]--;
      sum -= denomination;
    }
  });
  return res;
}

// handleAtmRequest(-1);
// handleAtmRequest(3);
const res = handleAtmRequest(375, { 100: 5, 50: 3, 20: 20, 10: 5, 5: 1 });
// expected res [100,100,100,50,20,5]
console.log(res);
