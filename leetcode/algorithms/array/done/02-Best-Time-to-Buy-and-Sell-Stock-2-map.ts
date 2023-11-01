export {}

function maxProfit (prices: number[]): number {
  let profit = 0;
  let diff;

  if (prices.length === 1) {
    return 0;
  }

  prices.map((item, i) => {
    const nextItem = prices[i + 1];
    if (nextItem && nextItem > item) {
      diff = nextItem - item;
      profit += diff;
    }
  });

  return profit;
};

const res = maxProfit([ 7, 1, 5, 3, 6, 4 ]);
console.log('-- -- -- res', res);
