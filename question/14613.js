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

let count = 20;
let score = 2_000; // 시작점수

// 게임 수는 20 판, 각 판을 진행할 떄 마다 확률을 각각 계산?

let dp = {
  2000: 1,
};

for (let i = 0; i < count; i++) {
  const newDp = { ...dp };

  for (const s in dp) {
    if (dp[s] === 0) continue;
    const wScore = Number(s) + 50;
    const lScore = Number(s) - 50;
    if (!newDp[wScore]) newDp[wScore] = 0;
    if (!newDp[lScore]) newDp[lScore] = 0;
    newDp[wScore] = newDp[wScore] + w * dp[s];
    newDp[lScore] = newDp[lScore] + l * dp[s];
    newDp[s] = d * dp[s];
  }

  dp = newDp;
}

// 이거 가변확률 적용되서 그런거같은데
// newDp에 더하는 식으로 해보자 다시....

// 아니 풀었는데
// 소숫점 몇째자리 이게 개에바네

// console.log(dp);
const answer = {
  bronze: 0,
  silver: 0,
  gold: 0,
  platinum: 0,
  diamond: 0,
};

for (const s in dp) {
  if (Number(s) < 1500) {
    answer.bronze += dp[s];
  } else if (Number(s) >= 1500 && Number(s) < 2000) {
    answer.silver += dp[s];
  } else if (Number(s) >= 2000 && Number(s) < 2500) {
    answer.gold += dp[s];
  } else if (Number(s) >= 2500 && Number(s) < 3000) {
    answer.platinum += dp[s];
  } else {
    answer.diamond += dp[s];
  }
}

for (const k in answer) {
  console.log(answer[k].toFixed(8));
}

// 한 10 % 쯤에서 틀림. 거의다풀었따 .
