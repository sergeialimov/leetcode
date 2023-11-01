https://leetcode.com/submissions/detail/537500337/?from=explore&item_id=549
// 4, 1, 2, 1, 2

let result = 0;
for (const num of nums) {
    result ^= num; // wtf, why does it work?
}
return result;

0^4  // 0 ^ 100 = 100
4^1  // 100 ^ 1 =  // 5
1^2  // 1 ^ 10 =   // 7
7^1  //

// usages of bitwise xor
