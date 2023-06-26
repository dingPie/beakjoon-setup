// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [n, quantity] = input[0].split(" ").map((v) => Number(v));
console.log(n, quantity);

const board = input
  .slice(1, n + 1)
  .map((v) => v.split(" ").map((v) => Number(v)));
console.log(board);

const coords = input
  .slice(n + 1)
  .map((v) => v.split(" ").map((v) => Number(v)));

console.log(coords);

// const dp =

// dp[i][j-1] + dp[i][j-1] - dp[i-1][j-1] + board[i][j]
// 1 3 6 10
// 3 8 15 24
// 3 12 19 34
// 4 5 6 7
