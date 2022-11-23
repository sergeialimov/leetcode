# ATM with limited cash

## Requirements
There is an ATM with banknote denominations of 100, 50, 20, 10, 5. The number of banknotes is limited. It is necessary to issue the least number of banknotes. The amount must be greater than zero and a multiple of the minimum banknote


We have to calcuylate what amount is available in ATM if the user wants to receive more than available or an amount that cannot be given out, then we must inform him


Example 1:
```
Input: 375, {100: 5, 50: 3, 20: 20, 10: 5, 5: 1}
Output: [100,100,100,50,20,5]
```

Example 2:

```
Input: 23, {100: 5, 50: 3, 20: 20, 10: 5, 5: 1}
Output: Failed to issue this amount, try another amount
```

Example 3:
```
Input: 800, {100: 5, 50: 3}
Output: Failed to issue this amount, try another amount
```