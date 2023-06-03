// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));

const dp = Array(cnt).fill(1);

for (let i = 1; i < cnt; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j] && dp[j] >= dp[i]) {
      dp[i] = dp[j] + 1;
    }
  }
}

console.log(Math.max(...dp));
