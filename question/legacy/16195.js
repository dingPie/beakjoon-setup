// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));
const mod = 1000000009;

let max = 0;
arr.forEach(([v, a]) => {
  if (v > max) max = v;
});

const dp = Array(max)
  .fill(0)
  .map(() => Array(max).fill(0));

dp[0][0] = 1;
dp[0].forEach((v, i) => (dp[0][i] = 1));

dp[1][0] = 1;
dp[1][1] = 2;
dp[1].forEach((v, i) => {
  if (i > 0) dp[1][i] = 2;
});

dp[2][0] = 1;
dp[2][1] = 3;
dp[2][2] = 4;
dp[2].forEach((v, i) => {
  if (i > 2) dp[2][i] = 4;
});

for (let i = 3; i < max; i++) {
  for (let j = 1; j < max; j++) {
    const curr = dp[i - 3][j - 1] + dp[i - 2][j - 1] + dp[i - 1][j - 1];
    dp[i][j] = curr % mod;
  }
}

const answer = arr.map(([i, j]) => dp[i - 1][j - 1]);

console.log(answer.join("\n"));
