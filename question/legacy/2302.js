// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const vipN = Number(input[1]);

const vipList = input.slice(2).map((v) => Number(v));

const dp = {
  0: 1,
  1: 1,
};

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

if (!vipN) {
  console.log(dp[n]);
  return;
}

const arr = [];
let now = 0;
for (let i = 0; i < vipN; i++) {
  const leng = vipList[i] - now - 1;
  arr.push(leng);
  now = vipList[i];
}
if (now !== n) {
  const leng = n - now;
  arr.push(leng);
}
const answer = arr.reduce((a, c) => a * dp[c], 1);

console.log(answer);

// 어디보자.
// n: 1 -> 1
// n: 2 -> 1, 2 / 2,1 -> 2
// n: 3 -> 123 / 213 / 132
// n: 4 -> 1234 / 1243 / 2134 / 2143 / 1324
// n: 5 -> 12345
