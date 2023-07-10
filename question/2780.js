// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map((v) => Number(v));
const mod = 1234567;

const max = Math.max(...numbers);

const near = [2, 3, 2, 3, 4, 3, 3, 3, 2, 1];

const dp = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
const canNums = [
  [7],
  [2, 4],
  [1, 3, 5],
  [2, 6],
  [1, 5, 7],
  [2, 4, 6, 8],
  [3, 5, 9],
  [4, 8, 0],
  [5, 7, 9],
  [6, 8],
];

for (let i = 1; i <= max; i++) {
  const t = Array(10).fill(0);
  for (let j = 0; j <= 9; j++) {
    t[j] = canNums[j].reduce((a, c) => a + dp[i - 1][c], 0) % mod;
  }
  dp[i] = t;
}

const answer = numbers.map((v) => dp[v - 1].reduce((a, c) => a + c, 0) % mod);

console.log(answer.join("\n"));

// 왜안되지..
