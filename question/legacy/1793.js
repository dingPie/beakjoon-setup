// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input.map((v) => Number(v));
const max = Math.max(...numbers);

const dp = {
  0: 1n,
  1: 1n,
  2: 3n,
};

for (let i = 3; i <= max; i++) {
  dp[i] = dp[i - 2] * 2n + dp[i - 1];
}
const answer = numbers.map((v) => dp[v].toString());

console.log(answer.join("\n"));

// 1 1
// 2 3
// 3 5
// 4 11
// 5 21
