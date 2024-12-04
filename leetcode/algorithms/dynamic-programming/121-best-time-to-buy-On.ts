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
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i <= prices.length - 1; i++) {
    const currentPrice = prices[i];

    if (currentPrice < minPrice) {
      minPrice = currentPrice
    }

    const profitTmp = currentPrice-minPrice;

    if (profitTmp > maxProfit) {
      maxProfit = profitTmp;
    }
  }

  return maxProfit;
};



// const res = maxProfit([ 7,6,4,3,1 ]);
// const res = maxProfit([ 7,1,5,3,6,4 ]);
const res = maxProfit([ 1,2 ]);
// const res = maxProfit(testPrices);
console.log(res);

/**
 * The approach is called greedy because at each step, you make a locally optimal choice with the hope that these local choices lead to a globally optimal solution.
 *
 * In the context of this problem, the greedy decision is to always track the lowest price encountered so far (this is the "buy" price) and then compute the profit based on the difference between the current price (the "sell" price) and the lowest price seen up to that point.
 *
 * The reason it's considered greedy is that at each step, you make the best decision based on the information available up to that point (i.e., buying at the lowest price seen so far and selling at the current price), and you don't revisit past decisions. This is characteristic of greedy algorithms, which aim to make the best choice at each step without reconsidering previous choices.
 *
 * By always trying to maximize profit by selling at the highest price after the lowest buy price, the algorithm is effectively "greedy" because it's making the best local decision at each iteration to achieve the maximum possible overall profit.
 */
