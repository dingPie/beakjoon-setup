// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map((v) => Number(v));

const dp = {
  1: 1,
  2: 2,
  3: 3,
};

for (let i = 4; i <= 10000; i++) {
  if (i % 6 === 1) dp[i] = dp[i - 1] + Math.floor(i / 6);
  else dp[i] = dp[i - 1] + Math.floor(i / 6) + 1;
}

const answer = numbers.map((v) => dp[v]);
console.log(answer.join("\n"));
