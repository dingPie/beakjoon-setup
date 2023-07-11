// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const nums = input.slice(1).map((v) => Number(v));
const mod = 1000000009;

const max = Math.max(...nums);

const dp = [
  [1, 0],
  [1, 1],
  [2, 2],
];

for (let i = 3; i < max; i++) {
  const odd = (dp[i - 3][1] + dp[i - 2][1] + dp[i - 1][1]) % mod;
  const even = (dp[i - 3][0] + dp[i - 2][0] + dp[i - 1][0]) % mod;
  dp[i] = [odd, even];
}

const answer = nums.map((v) => dp[v - 1].join(" "));
console.log(answer.join("\n"));

// 틀렸네;
