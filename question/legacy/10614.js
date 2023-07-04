// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const [c, r, o] = input.map((v) => Number(v));

const board = Array(c)
  .fill(0)
  .map(() => Array(r).fill(0n));

if (o === 0) {
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      if (i === 0 || j === 0) board[i][j] = 1n;
      else {
        board[i][j] = board[i - 1][j] + board[i][j - 1];
      }
    }
  }
} else {
  const co = Math.ceil(o / r) - 1;
  const ro = o % r === 0 ? r - 1 : (o % r) - 1;

  for (let i = 0; i <= co; i++) {
    for (let j = 0; j <= ro; j++) {
      if (i === 0 || j === 0) board[i][j] = 1n;
      else {
        board[i][j] = board[i - 1][j] + board[i][j - 1];
      }
    }
  }

  for (let i = co; i < c; i++) {
    for (let j = ro; j < r; j++) {
      if (i === 0 || j === 0) board[i][j] = 1n;
      else {
        board[i][j] = board[i - 1][j] + board[i][j - 1];
      }
    }
  }
}

console.log(board[c - 1][r - 1].toString());
