// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
let number = Number(input);
// DFS로 하면 안풀림. DP 활용해야 함.

//한번더 풀어보자.

// const dp = Array(number + 1).fill(0);

// for (let i = 2; i < dp.length; i++) {
//   dp[i] = dp[i - 1] + 1;
//   if (i % 2 === 0) dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
//   if (i % 3 === 0) dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
// }

// console.log(dp[number]);
