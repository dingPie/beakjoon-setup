// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input.slice(1).map((v) => Number(v));
const max = Math.max(...numbers);

const dp = {
  1: 1,
  2: 2,
  3: 4,
  4: 7,
};

for (let i = 5; i <= max; i++) {
  dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % 1000000009;
}

const answer = numbers.map((v) => dp[v]);
console.log(answer.join("\n"));

// 3은?
// 1 1 1
// 2 1
// 1 2
// 3

// 5 ?
// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 1 2
// 2 2 1
// 1 1 3
// 1 3 1
// 3 1 1
// 2 3
// 3 2
