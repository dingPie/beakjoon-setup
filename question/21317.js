// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const k = Number(input.at(-1));

const arr = input.slice(1, n).map((v) => v.split(" ").map((v) => Number(v)));

const dp = Array(n).fill(0);
dp[1] = arr[0][0];

console.log(dp, arr);

for (let i = 2; i < n; i++) {
  const [one, two] = arr[i - 1];
  dp[i] = Math.min(dp[i - 1] + one, dp[i - 2] + two);
}

console.log("dp", dp);

// 1번을 빼먹고 가낟...
