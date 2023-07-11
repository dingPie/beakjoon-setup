// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

let max = 0;
const mod = 1000000009;

const nums = input.slice(1).map((v) =>
  v.split(" ").map((v) => {
    if (Number(v) > max) max = Number(v);
    return Number(v);
  })
);

const dp = Array(max)
  .fill(0)
  .map((v) => Array(max + 1).fill(0));
dp[0][1] = 1;
dp[1][1] = 1;
dp[1][2] = 1;
dp[2][1] = 1;
dp[2][2] = 2;
dp[2][3] = 1;

for (let i = 3; i < max; i++) {
  for (let j = 1; j <= max; j++) {
    dp[i][j] = (dp[i - 3][j - 1] + dp[i - 2][j - 1] + dp[i - 1][j - 1]) % mod;
  }
}

const answer = nums.map(([i, j]) => dp[i - 1][j]);

console.log(answer.join("\n"));

// 최대값인 1000 * 1000 돌려봐야 ㄱㅊ은듯.

// const dp = {
//   1: [0, 1, 0, 0, 0],
//   2: [0, 1, 1, 0, 0], // 11, 2
//   3: [0, 1, 2, 1, 0], // 111 12 21 3
//   4: [0, 0, 3, 3, 1], // 111 12 21 3
//   5: [0, 0, 2, 6, 4, 1], // 111 12 21 3
// };

//  i-3 i-2 i-1 의 자릿수를 더해서 하나씩 밀면된다.

// 111 12 21 3
// 11 2
// 1 2 4
// const

// 1 2 4 7 13

// 11111
// 1112 1121 1211 2111
// 113 131 311 122 212 221
// 23 32
//

// 만약 9의 경우 3자리 (333) 부터 9자리.
// Math.floor(m / 3) 이 최소인듯.
