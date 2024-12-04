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
function readNumber() {
  return Number(_inputLines[_curLine++]);
}

function getSum(a, b) {
  return a + b;
}

function solve() {
  const a = readNumber();
  const b = readNumber();

  console.log(getSum(a, b));
}