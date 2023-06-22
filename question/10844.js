// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const mod = 1000000000;

const n = Number(input);

const dp = Array(n)
  .fill(0)
  .map((v) => Array(10).fill(0));

for (let i = 1; i <= 9; i++) {
  dp[0][i] = 1;
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][j + 1] % mod;
    else if (j === 9) dp[i][j] = dp[i - 1][j - 1] % mod;
    else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % mod;
    }
  }
}

const answer = dp[n - 1].reduce((a, c) => a + c, 0);
console.log(answer % mod);

// 9, 17, 32, 61, 116, 222;

// const dp2 = {
//   1: 9,
// };

// const tri = {
//   1: 0,
//   2: 1,
//   3: 2,
//   4: 3,
// };

// // 0 1 1 1 3 4 5
// // 0 1 2 3 6 10 15?

// for (let i = 2; i <= n; i++) {
//   if (!tri[i]) tri[i] = tri[i - 1] + i - 2; // 이거 로직 수정해야 함....
//   dp2[i] = dp2[i - 1] * 2 - tri[i];
// }

// console.log(dp2[n] % mod);
