// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
let number = Number(input);

const dp = {
  1: false,
  2: false,
  3: 1,
  4: false,
  5: 1,
};

const arr = [3, 5];

for (let i = 6; i <= number; i++) {
  for (const sugar of arr) {
    if (dp[i - sugar] && (!dp[i] || dp[i] > dp[sugar] + dp[i - sugar]))
      dp[i] = dp[sugar] + dp[i - sugar];
  }
  if (!dp[i]) dp[i] = false;
}

const answer = dp[number] ? dp[number] : -1;
console.log(answer);
