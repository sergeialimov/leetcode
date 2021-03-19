function runningSum(nums) {
    var arr = [];
    // let nextItem: number = 0;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        var el = nums[i];
        sum += el;
        // nextItem = sum + nums[ i ];
        arr.push(sum);
    }
    console.log('-- -- -- arr', arr);
    return arr;
}
;
var input = [1, 2, 3, 4];
runningSum(input);
// Output: [1,3,6,10]
//# sourceMappingURL=01-1480-sum-of-array.js.map