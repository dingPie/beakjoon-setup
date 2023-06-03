// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

// 최대 읽을 수 있는 수와 챕터의 수
const [max, cc] = input[0].split(" ").map((v) => Number(v));

const arr = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const dp = Array(cc + 1)
  .fill(0)
  .map((v) => Array(max + 1).fill(0));

for (let c = 1; c < cc + 1; c++) {
  const [count, value] = arr[c - 1];
  for (let m = 0; m < max + 1; m++) {
    if (m >= count) {
      dp[c][m] = Math.max(dp[c - 1][m], dp[c - 1][m - count] + value);
    } else {
      dp[c][m] = dp[c - 1][m];
    }
  }
}

console.log(dp.at(-1).at(-1));
