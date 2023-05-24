// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let num = Number(input);

const dp = {};

const sqrts = [];

for (let i = 1; i <= Math.sqrt(num); i++) {
  dp[i ** 2] = 1;
  sqrts.push(i ** 2);
}

for (let i = 2; i <= num; i++) {
  if (dp[i]) continue;

  for (let j = 0; j < sqrts.length; j++) {
    const sqrt = sqrts[j];
    if (!dp[i] || dp[i] > dp[i - sqrt] + dp[sqrt]) {
      dp[i] = dp[i - sqrt] + dp[sqrt];
      if (dp[i] === 2) break;
    }
  }
}

console.log(dp[num]);

// 제곱수의 합을 구할 때 최소값.

// 최대가 10만, 그 이전까지 제곱수에는 다 1.
