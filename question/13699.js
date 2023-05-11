// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const number = Number(input);

const dp = {
  0: 1n,
  1: 1n,
  2: 2n,
};

for (let i = 3; i <= number; i++) {
  let result = 0n;
  for (let j = 0; j < i; j++) {
    result += dp[i - 1 - j] * dp[j];
  }
  dp[i] = result;
}

console.log(dp[number].toString());
