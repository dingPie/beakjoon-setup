// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const dp = [1n, 1n, 1n, 2n, 2n];

for (let i = 4; i < 100; i++) {
  dp.push(dp[i] + dp[i - 4]);
}

const answer = input.slice(1).map((v) => dp[v - 1].toString());

console.log(answer.join("\n"));
