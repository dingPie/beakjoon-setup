// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const n = Number(input);

const dp = {
  0: 0,
  1: 1,
};

const birthObj = {
  0: 0,
  1: 1,
};

for (let i = 2; i <= n; i++) {
  let newBug = dp[i - 1] * 2;
  birthObj[i] = dp[i - 1];

  if (i > 3 && (i - 3) % 2 === 1) {
    newBug -= birthObj[i - 3];
  }
  if (i > 4 && (i - 4) % 2 === 0) {
    newBug -= birthObj[i - 4];
  }

  dp[i] = newBug;
}

console.log(dp[n]);
