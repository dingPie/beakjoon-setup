// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));

const dp = Array(n).fill(0);
dp[0] = numbers[0];

for (let i = 1; i < n; i++) {
  dp[i] = numbers[i];
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j] && numbers[i] + dp[j] >= dp[i]) {
      dp[i] = numbers[i] + dp[j];
    }
  }
}
console.log(Math.max(...dp));

// 현재 값을 더할 수 있는지?
// 더한 값에서 현재 값을 빼면
// skip의 미학이 있어야 되는건데.
