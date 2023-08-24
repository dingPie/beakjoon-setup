// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));

const dp = [...numbers].map((v) => [v, 1]);

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (dp[i][1] <= dp[j][1] + 1 && dp[i][0] === dp[j][0] + 1) {
      dp[i] = [dp[j][0] + 1, dp[j][1] + 1];
    }
  }
}
// console.log(dp);
console.log(Math.max(...dp.map((v) => v[1])));

// BigInt 로 해도 35점...
