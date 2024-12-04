function findDuplicates(len, arr) {
  const map = {};
  for (let i = 0; i < len; i++) {
    const element = arr[i];
    if (map[element]) {
      return element;
    } else {
      map[element] = true;
    }
  }
}

const input = [3,1,3,4,2];
const input2 = [2, 8, 8];
const len = 5;
const len2 = 5;

const res = findDuplicates(len2, input2);

console.log('--res', res);