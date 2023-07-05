// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const n = Number(input);

const dummy = {
  1: 1,
};

const tetra = {
  1: 1,
};

for (let i = 2; i <= n; i++) {
  dummy[i] = dummy[i - 1] + i;
  if (tetra[i - 1] + dummy[i] >= n) break;
  tetra[i] = tetra[i - 1] + dummy[i];
}

const dp = {};

for (const key in tetra) {
  dp[tetra[key]] = 1;
}

for (let i = 2; i <= n; i++) {
  if (dp[i]) continue;
  for (let j in tetra) {
    const k = tetra[j];
    if (i < k) break;
    dp[i] = Math.min(dp[k] + dp[i - k] || n, dp[i] || n);
  }
}

console.log(dp[n]);

// 11번에서 틀리네ㅠ..

// 시간초과.. 아마 마지막 로직이 너무 오래걸리는듯.

// 일단 dp를 30만 이하까지 구해서.
// 가장 적합한 조합을 어떻게 찾아내느냐?

// dp까지 써서 조합을 만들었을 때 최소?
// 요 dp로 어떻게 ...구하지 최소값의 조합을.
// 무작정 큰거부터 뺴주면 안되고..

// 1부터 n까지 만들 때 최소값?
