/**
 Do not return anything, modify matrix in-place instead.
 */

// Outer loop. Iterate through matrix from the last element to the first
// Inner loop. Take the first element
// push it to the first
function rotate (matrix: number[][]): void {
  for (let i = matrix.length-1; i >= 0; i--) {
    const el = matrix[i];
    // let countOut = 0;
    // let countIn = 0;
    for (let m = 0; m <= el.length-1; m++) {
      // const subEl = matrix[i][m];
      // matrixNew[countOut][countIn] = subEl;
      // countOut++;
    }
    // countOut = 0;
    // countIn++;
  };
}

const matrix = [[ 1,2,3 ],[ 4,5,6 ],[ 7,8,9 ]];
console.log('-- before', matrix);
rotate(matrix)
console.log('-- after', matrix);
// const expected = [[3,1],[4,2]]
// assert.deepEqual(matrix, matrix);
