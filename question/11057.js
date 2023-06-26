// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const n = Number(input);

// console.log(n);

const dp = Array(n)
  .fill(0)
  .map(() => Array(10).fill(1));

for (let i = 1; i < n; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    dp[i][j] = dp[i - 1].slice(0, j + 1).reduce((a, c) => a + c, 0) % 10007;
  }
}

const answer = dp.at(-1).reduce((a, c) => a + c, 0);

console.log(answer % 10007);

// dp[i] = dp[i - 1].reduce((a, c) => a + c, 0);

// DP 좀 잘 짜자;

// 기록을 그냥 길이 10 배열로 하면 안되나...
// 1 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9 10
// 1 3 6

// 00 01 02 03... (10)
// 11 12 13... 19 (9)
// 99 (1)
//  55

// n으로 끝나는 수를 기록하면 되곘는데?
// 00 -> 1 * 10
// 01 11 -> 2 * 9
// 02 12 22 -> 3 * 8

// 000
// 001 011 111 -> 3
// 002 012 112 022 122 222 -> 6

// 0000
// 0001 0011 0111 1111 -> 4
// 0002 0012 0112 1112 0022 0122 1122 0222 1222 2222 -> 10
