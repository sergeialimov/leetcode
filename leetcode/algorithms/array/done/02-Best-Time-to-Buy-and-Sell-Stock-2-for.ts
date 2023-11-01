export {}

function maxProfit (prices: number[]): number {
  let profit = 0;
  let diff;
  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    const nextElement = prices[index + 1];
    if (nextElement && nextElement > element) {
      diff = nextElement - element;
      profit += diff;
    }
  }
  return profit;
};

const res = maxProfit([ 7, 1, 5, 3, 6, 4 ]);
console.log('-- -- -- res', res);
