import { testPrices } from './prices';
/**
 * 121. Best Time to Buy and Sell Stock
 * Easy
 * Topics
 * Companies
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * @param prices
 */
function maxProfit (prices: number[]): number {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const day1 = prices[i];
    for (let j =  i + 1; j < prices.length; j++) {
      const day2 = prices[j];
      const profitTmp = day2 - day1;
      if (profitTmp > maxProfit) {
        maxProfit = profitTmp;
      }
    }
  }

  return maxProfit;
};



// const res = maxProfit([ 7,6,4,3,1 ]);
// const res = maxProfit([ 7,1,5,3,6,4 ]);
const res = maxProfit(testPrices);
console.log(res);
