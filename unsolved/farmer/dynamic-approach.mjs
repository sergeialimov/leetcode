import { testTomatoesLong } from './constants.mjs';

const bucketCapacity = { weight: 1000, size: 30 };  // Example capacities

// Function to distribute tomatoes using Dynamic Programming
function distributeTomatoesDP(tomatoes) {
  const n = tomatoes.length;

  // Initialize the DP table with all zeros
  const dp = Array.from({ length: n + 1 }, () =>
    Array(bucketCapacity.size + 1).fill(0).map(() =>
      Array(bucketCapacity.weight + 1).fill(0)
    )
  );

  for (let i = 1; i <= n; i++) {
    const tomato = tomatoes[i - 1];  // Current tomato
    for (let s = 0; s <= bucketCapacity.size; s++) {
      for (let w = 0; w <= bucketCapacity.weight; w++) {
        if (tomato.size <= s && tomato.weight <= w) {
          dp[i][s][w] = Math.max(
            dp[i - 1][s][w], // Don't include the current tomato
            dp[i - 1][s - tomato.size][w - tomato.weight] + 1 // Include the current tomato
          );
        } else {
          dp[i][s][w] = dp[i - 1][s][w];  // Cannot include current tomato
        }
      }
    }
  }

  // Backtrack to find the selected tomatoes
  const selectedTomatoes = [];
  let s = bucketCapacity.size;
  let w = bucketCapacity.weight;
  for (let i = n; i > 0; i--) {
    if (dp[i][s][w] !== dp[i - 1][s][w]) {
      selectedTomatoes.push(tomatoes[i - 1]);  // Tomato is included in the optimal set
      s -= tomatoes[i - 1].size;
      w -= tomatoes[i - 1].weight;
    }
  }

  return selectedTomatoes;
}

// Example usage:
const optimizedTomatoDistribution = distributeTomatoesDP(testTomatoesLong);
console.log(optimizedTomatoDistribution);
