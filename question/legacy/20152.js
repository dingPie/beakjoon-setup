// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const [h, n] = input.map((v) => Number(v));

const diff = Math.abs(h - n) + 1;

if (diff < 2) {
  console.log(1);
  return;
}

const dp = Array(diff)
  .fill(0)
  .map((v) => Array(diff).fill(0));

dp[0][0] = 1;

for (let i = 0; i < diff; i++) {
  for (let j = 0; j < diff; j++) {
    if (i > j) continue;

    if (dp[i - 1]) {
      dp[i][j] = (dp[i - 1][j] || 0) + (dp[i][j - 1] || 0);
    } else dp[i][j] = 1;
  }
}

console.log(dp.at(-1).at(-1));

// 2차원배열의 dp...

// for (let i = diff - 1; i >= 0; i--) {
//     for (let j = 0; j < diff; j++) {
//       if (diff - i - 1 > j) {
//         console.log("여기 ?", i, j);
//         dp[i][j] = 1;
//       }
//     }
//   }

// 1
// 1 1
// 1 2 2
// 1 3 5 5

// f(1) =1
// f(2) =1

// 1 2 5 14 ....
// 1 3 9 ..

// 결국 일단 차이만큼 구해야되네

// H - N = 0 -> 1

// H - N = 1 -> 1
// X X X N
// X X H O // 1

// H - N = 2 -> 2
// X X X N
// X X O O // 1
// X H O O // 2

// 예제 2번
// X X X N
// X X O O
// X O O O //
// H O O O // 5

// 예제 1번
// X X X X X X X X H
// X X X X X X X O O
// X X X X X X O O O
// X X X X X O O O O
// X X X X N O O O O

// X X X O O O O O O
// X X O O O O O O O
// X O O O O O O O O
// O O O O O O O O O
