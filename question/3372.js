// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);

const board = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const dp = Array(n)
  .fill(0)
  .map((v) => Array(n).fill(0));

const need = [[0, 0]];

while (need.length) {
  const [i, j] = need.shift();
  const d = board[i][j];
  if (d === 0) continue;

  if (i + d < n) {
    need.push([i + d, j]);
    dp[i + d][j] += 1;
  }
  if (j + d < n) {
    need.push([i, j + d]);
    dp[i][j + d] += 1;
  }
  console.log([i, j], dp);
}

console.log(dp.at(-1).at(-1));

// 너비탐색 BFS
