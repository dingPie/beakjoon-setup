// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");
const [w, l, d] = input.map((v) => Number(v));

// 브론즈: 1000~1499
// 실버: 1500~1999
// 골드: 2000~2499
// 플래티넘: 2500~2999
// 다이아: 3000~3499
// 소수점 8자리까지 출력
console.log(w, l, d);

let count = 20;
let score = 2_000; // 시작점수

// 게임 수는 20 판, 각 판을 진행할 떄 마다 확률을 각각 계산?

const tt = (num) => Math.round(num * 10_000_000) / 10_000_000;

const dp = {
  2000: 1,
};
// 현재의 확률을 다 나눠주고
// 결과의 확률만 더해준다?
//
for (let i = 0; i < count; i++) {
  for (const s in dp) {
    const wScore = Number(s) + 50;
    const lScore = Number(s) - 50;
    if (!dp[wScore]) dp[wScore] = 0;
    if (!dp[lScore]) dp[lScore] = 0;
    dp[wScore] = tt(w * dp[s]);
    dp[lScore] = tt(l * dp[s]);
    dp[s] = tt(d * dp[s]);
  }
  console.log(dp);
}

console.log(dp);

// 이거 -7 자리 이런식으로 뜸.
// 소숫점도 bigInt가 가능한가?

// ㅅㅂ d여기서 확률을 어케넣어

// 현재 값에서 승 /패 확률을 더한값.
