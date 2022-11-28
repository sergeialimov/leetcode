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
console.log(res)
