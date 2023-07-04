// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const cnt = Number(input[0]);

const reserve = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const dp = Array(cnt).fill(0);
// dp[0] = reserve[0][2];

for (let i = 0; i < cnt; i++) {
  const max = Math.max((dp[i - 2] || 0) + reserve[i][2], dp[i - 1] || 0);
  dp[i] = max;
}

console.log(dp[cnt - 1]);

// 이거 이전 회의실 배정 이거랑 같은거 아닌가..?
// 같은데 N이 훨씬 크네...ㅋㅋㅋ

// 이전값을 빼고 현재 값을 더한거 or 이전값 중 큰거.
