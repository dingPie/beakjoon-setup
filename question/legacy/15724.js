// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [row, col] = input[0].split(" ").map((v) => Number(v));

const board = input
  .slice(1, row + 1)
  .map((v) => v.split(" ").map((v) => Number(v)));

const dp = Array(row + 1)
  .fill(0)
  .map((v) => Array(col + 1).fill(0));

const coords = input
  .slice(row + 2)
  .map((v) => v.split(" ").map((v) => Number(v)));

for (let i = 1; i < row + 1; i++) {
  for (let j = 1; j < col + 1; j++) {
    dp[i][j] =
      board[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1];
  }
}

const answer = coords.map(
  ([x1, y1, x2, y2]) =>
    dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]
);

console.log(answer.map((v) => v.toString()).join("\n"));
