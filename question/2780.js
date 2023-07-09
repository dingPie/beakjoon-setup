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

// const near = [2, 3, 2, 3, 4, 3, 3, 3, 2, 1];

// const dp = {
//   1: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// };

// const near = [2n, 3n, 2n, 3n, 4n, 3n, 3n, 3n, 2n, 1n];

// const dp = {
//   1: [1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n],
// };

for (let i = 2; i <= max; i++) {
  dp[i] = dp[i - 1].map((v, i) => (v * near[i]) % mod);
}

const answer = numbers.map((v) => dp[v].reduce((a, c) => a + c, 0) % mod);

console.log(answer.join("\n"));

// 왜안되지..

const canNums = {
  1: [2, 4],
  2: [1, 3, 5],
  3: [2, 6],
  4: [1, 5, 7],
  5: [2, 4, 6, 8],
  6: [3, 5, 9],
  7: [4, 8, 0],
  8: [5, 7, 9],
  9: [6, 8],
  0: [7],
};
