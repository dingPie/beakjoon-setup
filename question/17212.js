// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const number = Number(input);

const dp = {
  0: 0,
  1: 1,
  2: 1,
  3: 2,
  4: 2,
  5: 1,
  6: 2,
  7: 1,
};

const table = [1, 2, 5, 7];

for (let i = 3; i <= input; i++) {
  if (dp[i]) continue;
  const arr = table.map((v) => dp[v] + dp[i - v]);
  dp[i] = Math.min(...arr);
}

console.log(dp[number]);

// 1원, 2원, 5원, 7원
