// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));

const dp = Array(cnt).fill(1);

for (let i = cnt - 2; i >= 0; i--) {
  for (let j = i + 1; j < cnt; j++) {
    if (numbers[i] < numbers[j] && dp[i] <= dp[j]) {
      dp[i] = dp[j] + 1;
      // break;
    }
  }
  // console.log(dp);
}

console.log(Math.max(...dp));

// 이전 수보다 작으면 1증가?

// 해당 idx에서부터 더 큰 수들? 을 뒤에서 뽑으면 되는데
// 이걸 매 idx마다 하는건 좀 말이 안되는거같고,

// dp 증가시킬 떄 기준값도 있어야 할 듯.
// 해당 셀로 접근할 때 최소값?
