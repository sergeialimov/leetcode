/**
 *
 * 746. Min Cost Climbing Stairs
 *
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 *
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
*/
function minCostClimbingStairs (cost: number[]): number {
  let prev1 = cost[1];
  let prev2 = cost[0];

  for (let i = 2; i <= cost.length; i++) {

    // handle last step
    if (i === cost.length) {
      return Math.min(prev1, prev2);
    }

    // handle normal step
    const currentBestStep = Math.min(prev1, prev2) + cost[i];

    prev2 = prev1;
    prev1 = currentBestStep;
  }
  return Math.min(prev1, prev2);
};


// const res = minCostClimbingStairs([ 10, 15, 20 ]);
// const res = minCostClimbingStairs([ 1,100,1,1,1,100,1,1,100,1 ]);
// const res = minCostClimbingStairs([ 0,1,2,2 ]);
// const res = minCostClimbingStairs([ 10, 20, 15 ]);
const res = minCostClimbingStairs([ 10, 20, 9 ]);
console.log(res);
