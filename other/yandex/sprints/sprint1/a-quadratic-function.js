const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

let _inputLine;

// Set callback on read line
_reader.on('line', line => {
  _inputLine = line;
});

process.stdin.on('end', solve);

// parsing lines and move pointer
function readStr() {
  return _inputLine;
}

function solveQuadraticFunction(a, x, b, c) {
  const res = a * x**2 + b * x + c;
  return res;
}

function solve() {
  const input = readStr();
  const parsed = input.split(' ');
  const a = Number(parsed[0]);
  const x = Number(parsed[1]);
  const b = Number(parsed[2]);
  const c = Number(parsed[3]);


  console.log(solveQuadraticFunction(a, x, b, c));
}