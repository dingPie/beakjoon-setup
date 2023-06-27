// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [n, quantity] = input[0].split(" ").map((v) => Number(v));

const dp = input.slice(1, n + 1).map((v) => v.split(" ").map((v) => Number(v)));

const coords = input
  .slice(n + 1)
  .map((v) => v.split(" ").map((v) => Number(v) - 1));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0) {
      dp[i][j] += dp[i][j - 1] || 0;
    } else if (j === 0) {
      dp[i][j] += dp[i - 1][j] || 0;
    } else {
      dp[i][j] = dp[i][j] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }
}

const answer = coords.map(([y1, x1, y2, x2]) => {
  const d1 = dp[y1 - 1] ? dp[y1 - 1][x2] || 0 : 0;
  const d2 = dp[y2] ? dp[y2][x1 - 1] || 0 : 0;
  const d3 = dp[y1 - 1] ? dp[y1 - 1][x1 - 1] || 0 : 0;
  const d4 = dp[y2][x2];
  return d4 - d1 - d2 + d3;
});

console.log(answer.join("\n"));

// x -> y를 바꿔야되나 ㅅㅂ..

// dp[i][j-1] + dp[i][j-1] - dp[i-1][j-1] + board[i][j]
// 1 3 6 10
// 3 8 15 24
// 3 12 19 34
// 4 5 6 7

// 1 3 6 10
// 3 8 15 24
// 6 15 27 42
// 10	24 42	64

// [0, 2], [2,0] [0, 0]
// 42 - 10 - 6 + 1

// [0, 1]
