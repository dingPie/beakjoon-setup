// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [r, c] = input[0].split(" ").map((v) => Number(v));

const dp = Array(r)
  .fill(0)
  .map((v) => Array(c).fill(0));

const board = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

dp[0][0] = board[0][0];

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (board[i - 1] && dp[i - 1][j - 1] + board[i][j] > dp[i][j]) {
      dp[i][j] = dp[i - 1][j - 1] + board[i][j];
    }
    if (board[i - 1] && dp[i - 1][j] + board[i][j] > dp[i][j]) {
      dp[i][j] = dp[i - 1][j] + board[i][j];
    }
    if (dp[i][j - 1] + board[i][j] > dp[i][j]) {
      dp[i][j] = dp[i][j - 1] + board[i][j];
    }
  }
}

console.log(dp[r - 1][c - 1]);
