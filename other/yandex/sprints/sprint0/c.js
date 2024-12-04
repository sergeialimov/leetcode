// const _readline = require('readline');

// const _reader = _readline.createInterface({
//     input: process.stdin
// });

const _inputLines = [
  '7',
  '1 2 3 4 5 6 7',
  '4'
];
let _curLine = 0;

// _reader.on('line', line => {
//     _inputLines.push(line);
// });

// process.stdin.on('end', solve);

function movingAverage(array, windowSize) {
  const res = [];
    
  let sum = 0;
  for (let k = 0; k < windowSize; k++) {
    sum += array[k];
  }
  res.push(sum / windowSize);
  
  for (let i = windowSize; i < array.length; i++) {
    sum -= array[ i - windowSize ] + array[i];
    res.push(sum / windowSize);
  }
  
  return res;
}

function solve() {
  const n = readInt();
  const arr = readArray();
  const windowSize = readInt();
  process.stdout.write(`${movingAverage(arr, windowSize).join(' ')}`);
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

solve()