// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const numbers = input.map((v) => Number(v));

const [n, k] = numbers;

if (n === 1 || k === n || k === 0) {
  console.log(1);
  return;
}

const dp = [1];

for (let i = 2; i <= n; i++) {
  dp.push(dp.at(-1) * i);
}

console.log(dp[n - 1] / (dp[k - 1] * dp[n - k - 1]));
