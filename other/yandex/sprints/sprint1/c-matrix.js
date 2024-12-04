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

function getNeighbour(rowsNum, columnsNum, matrix, x, y) {
  const res = [];
  // left neighbour
  if (x != 0) {
    res.push(matrix[y][x - 1]);
  }

  // right neighbour
  if (x != columnsNum - 1) {
    res.push(matrix[y][x + 1]);
  }

  // top neighbour
  if (y != 0) {
    res.push(matrix[y - 1][x]);
  }

  // bottom neighbour
  if (y != rowsNum -1) {
    res.push(matrix[y + 1][x]);
  }

  return res.sort((a, b) => a - b);
}

function solve() {
  const rowsNum = Number(readLine());
  const columnsNum = Number(readLine());
  const matrix = [];

  for (let i = 0; i < rowsNum; i++) {
    const row = readLine();
    const arr = row.split(' ').map(Number);
    matrix.push(arr);
  }
  const y = Number(readLine());
  const x = Number(readLine());


  const res = getNeighbour(rowsNum, columnsNum, matrix, x, y);
  console.log(res.join(' '));
}