const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Set callback on read line
_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', solve);


// parsing lines and move pointer
function readLine() {
  return _inputLines[_curLine++];
}

function countPeaks(rowsNum, arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (arr[i - 1] && arr[i - 1] < el && arr[i+1] < el) {
      res++;
    } else if (arr.length < i+2) {
      res++;
    }
  }
  return res;
}

function solve() {
  const rowsNum = Number(readLine());
  const row = readLine();
  const arr = row.split(' ').map(Number);


  const res = countPeaks(rowsNum, arr);
  console.log(res);
}