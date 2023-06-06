// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [kind, number] = input.map((v) => Number(v));

if (kind === 1 || kind === number) {
  console.log(1);
  return;
}

const getFactorial = (num) => {
  const dp = { 1: 1n };
  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] * BigInt(i);
  }
  return dp[num];
};

const pick = number - kind;

const answer =
  getFactorial(number - 1) /
  (getFactorial(number - 1 - pick) * getFactorial(pick));

console.log(answer.toString());

// 9C7
// 9! / 2 * 7
// 9 8 / 2
