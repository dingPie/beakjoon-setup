// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map((v) => Number(v));

const mod = 1000000009;
const max = 100000;

const dp = {
  0: 1,
  1: 1,
  2: 2,
  3: 4,
};

for (let i = 4; i <= max / 2; i++) {
  dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % mod;
}

const answer = arr.map((v) => {
  if (v === 1) return 1;
  const d = Math.floor(v / 2);
  return (dp[d] + dp[d - 1]) % mod;
});

console.log(answer.join("\n"));

// const answer = arr.map((v) =>
//   v % 2 === 1 ? dp[(v - 1) / 2] + dp[(v - 3) / 2] : dp[v / 2] + dp[(v - 2) / 2]
// );

// 4 -> 2 + 1
// 5 -> 2 + 1
// 6 -> 3 + 2
// 7 -> 3 + 2
// ..

// console.log(dd);

// 0 0
// 1 1 -> 1
// 2 11 2 -> 2
// 3 111 12 21 3 -> 4
// 4 1111 112 211 121 22 13 31 -> 7
// 5 11111 1112 1121 1211 2111 113 131 311 122 212 221 23 32 -> 13

// 가운데가 n인 경우를 다 빼서 하면되지않나? 가운데가 3인경우는 없다.
// 짝수 -> (/2) (/2 - 2)

// 홀수 -> 가운데 1, 3
// 짝수 -> 가운데 0, 2

// const dp = {
//     1: 1,
//     2: 2,
//     3: 2,
//     4: 3,
//     5: 5,
//     6: 5,
//     7: 5,
//     8: 6,
//   };

// 가운데가 n일떄, 가운데가 1 / 2일때
// 짝수면 일단 반쪽이 n이 되는걸 하면됨. -> 아니네? 121 같은거 어케 대응

// 3 111 3
// 4 1111 121 22
// 5 11111 131 212
// 6 111111 1221 2112 222 33
// 7 1111111 11311 313 21112 12121
// 8 11111111 2222 12221 21212 1331 3113
