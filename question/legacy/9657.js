// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
let number = Number(input);

const dp = {
  1: "SK",
  2: "CY",
  3: "SK",
  4: "SK",
};

for (let i = 5; i <= number; i++) {
  const isWinSK = [dp[i - 1], dp[i - 3], dp[i - 4]].some((v) => v === "CY");
  if (isWinSK) dp[i] = "SK";
  else dp[i] = "CY";
}
console.log(dp[number]);

// 1 -> 1  sk
// 2 -> 1 1 cy
// 3 -> 3 sk
// 4 -> 4 sk
// 5 -> 3 1 1 sk
// 6 -> 4 1 1 sk
// 7 -> 1 4 1 1 cy
// 8 -> 1 1 4 1 1 sk
// 9 -> 1

// 1 3 4 를 뺐을때 다 sk 승리면 cy 승리

// 5 -> 4: sk 2: cy, 1: sk -> 2번 때문에 sk 승리
// 6 -> 5: sk 3: sk 2: cy -> 3번떄문에 sk 승리
// 7 -> 6: sk 4: sk 3: sk -> 전부 sk 승리, cy승리
// 8 -> 7: cy 5: sk 4: sk 1번째 때문에 sk 승리
// 9 -> 8: sk 6: sk 5: sk
