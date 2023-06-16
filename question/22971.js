// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));

const t = 998244353;

const dp = [1];

for (let i = 1; i < cnt; i++) {
  for (let j = 0; j < i; j++) {
    // console.log(i, j, numbers[j], numbers[i]);
    if (numbers[j] < numbers[i]) continue;
    else if (numbers[j] === numbers[i]) {
      //   console.log("##########", i, j, dp, dp[j]);
      dp[i] = dp[j];
    } else {
      const sum = dp.slice(0, j + 1).reduce((a, c) => a + c, 0);
      //   console.log("@@@@@@@@@@@", sum);
      dp[i] = (sum + 1) % t;
    }
    break;
  }
  if (!dp[i]) {
    const sum = dp.reduce((a, c) => a + c, 0);
    dp[i] = (sum + 1) % t;
  }
  //   console.log("dp", dp);
}

console.log(dp.join(" "));

// 푸는중........하.

// 1
// 2, 1 2
// 3, 1 3, 2 3, 1 2 3,
// 4 / 1 4 / 2 4 / 3 4 / 1 2 4 / 1 3 4 / 2 3 4 / 1 2 3 4

// 이전값들 + 지금 값으로 할 수 있는 값,,?

// 1 2 2 4 3
// 1
// 2 / 1 2
// 2 / 1 2
// 4 / 1 4 / 2 4 / 1 2 4 / 2 4 / 1 2 4
