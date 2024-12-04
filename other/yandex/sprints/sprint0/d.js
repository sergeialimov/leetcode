const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', solve);

// Если ответ существует, верните список из двух элементов
// Если нет - то верните пустой список 
function twoSum(array, targetSum) {
  const map = {}
  const res = [];

  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (!map[el]) {
      map[el] = 1;
    } else {
      map[el]++;
    }

    if (map[targetSum - el]) {
      if (targetSum - el !== el || map[targetSum - el] > 2) {
        res.push(targetSum - el);
        res.push(el);
        return res;
      } 
    }
  }
  return res;
}

function solve() {
  const n = readInt();
  const array = readArray();
  const targetSum = readInt();
  const ans = twoSum(array, targetSum);
  if (ans.length === 0) {
    console.log("None")    
  } else {
    process.stdout.write(`${ans.join(' ')}`);
  }
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  return n;
}

function readArray() {
  var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
  _curLine++;
  return arr;
}