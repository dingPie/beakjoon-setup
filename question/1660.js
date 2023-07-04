// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const n = Number(input);

const triDp = {
  0: 0,
};

const dp = {
  0: 0,
};

for (let i = 1; i <= n; i++) {
  triDp[i] = triDp[i - 1] + i;
  if (dp[i - 1] + triDp[i] >= n) break;
  dp[i] = dp[i - 1] + triDp[i];
}

const dp2 = {};

for (const key in dp) {
  dp2[dp[key]] = 1;
}

for (let i = 2; i <= n; i++) {
  if (!dp2[i]) {
    dp2[i] = n;
    for (let j = i; j >= i / 2; j--) {
      dp2[i] = Math.min(dp2[j] + dp2[i - j], dp2[i]);
      if (dp2[i] === 2) break;
    }
  }
}

console.log(dp2[n]);

// 시간초과.. 아마 마지막 로직이 너무 오래걸리는듯.

// 일단 dp를 30만 이하까지 구해서.
// 가장 적합한 조합을 어떻게 찾아내느냐?

// dp까지 써서 조합을 만들었을 때 최소?
// 요 dp로 어떻게 ...구하지 최소값의 조합을.
// 무작정 큰거부터 뺴주면 안되고..

// 1부터 n까지 만들 때 최소값?
