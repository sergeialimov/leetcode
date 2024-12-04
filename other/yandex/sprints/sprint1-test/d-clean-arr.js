function cleanArr(arr, num) {
  let j = 0; 
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el !== 0) {
      arr[i] = null;
      arr[j] = el;
      j++;
    } else {
      arr[i] = null;
    }
    
  }
  return arr;
}

const input = [-1, 0, 0, 1, 2, -1, -4, 0];
const input2 = [-1, 1, 2, -1, -4];
const num = 8;
const num2 = 5;

const res = cleanArr(input2, num2);

console.log('-- res', JSON.stringify(res).split(',').join(', '));