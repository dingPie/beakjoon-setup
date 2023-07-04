// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const numbers = input.slice(1).map((v) => Number(v));
const max = Math.max(...numbers);

// 끝점을 공유하지 않도록?

const dp = {
  1: 1n,
  2: 2n,
};

for (let i = 3; i <= max; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % BigInt(10 ** 9 + 7);
}

const answer = numbers.map((v) => dp[v].toString());
console.log(answer.join("\n"));
