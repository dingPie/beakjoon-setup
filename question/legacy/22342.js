// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [m, n] = input[0].split(" ").map((v) => Number(v));

const dp = input.slice(1).map((v) => v.split("").map((v) => Number(v)));

// const dp = Array(m)
//   .fill(0)
//   .map((v) => Array(n).fill(0));

// console.log(weightBoard);
console.log(dp);

for (let j = 1; j < n; j++) {
  for (let i = 0; i < m; i++) {
    for (let k = 0; k < i; k++) {
      // dp[i][j] = dp[i + k][j - 1];
    }
    console.log(i, j, dp[i][j]);
  }
}
console.log(dp);

// 하나씩 max 비교하면서 가면 될듯 .
// 이미 같은 행 + (a만큼 아래로 내리면 된다. (3차원?))

// ok 로직은 알겠는데.
// 이거 4차원 배열은 돌릴수가 없어. (너무오래걸림) 2000 * 2000 이 최대라고 생각하고.

//

// 가중치는 더하면 된다. (그럼 default로 생성해놓나?)

// 각 칸마다 로봇이 있고
// 왼쪽 열부터 동작, 같은 열에 있는 로봇은 동시에 동작

//

// 0, 0 이면

// ij의 입력값은 a, b의 출력값이라고 뭔소리야

// 각 로봇은 하나 이상의 입력 값,
// 하나의 저장 값, 하나의 출력 값을 가진다.

// (2, 2)
// b < 2
// |2-a| <= 2-b
// b + Math.abs(2-a) <= 2

// (a, b)
// (0, 0)
// (1, 0) (1, 1)
// (2, 0) (2, 1)
// (3, 0) (3, 1)
// (4, 0)

// i, j -> (0, 1)

// (0, 1)
// b < 1
// b + Math.abs(0-a) <= 1
// (a, b)
// (0, 0)
// (1, 0)

// (0, 2)
// b < 2, -> 0, 1
// b + Math.abs(0-a) <= 2
// (a, b)
// (0, 0) (0, 1)
// (1, 0) (1, 1)
// (2, 0)

// (0, 3)
// b < 3, -> 0, 1, 2
// b + Math.abs(0-a) <= 3
// (a, b)
// (0, 0) (0, 1) (0, 2)
// (1, 0) (1, 1) (1, 2)
// (2, 0) (2, 1)
// (3, 0)

// (1, 1)
// b + Math.abs(1-a) <= 1
// (a, b)
// (0, 0)
// (1, 0)
// (2, 0)

// ㅇㅋ 삼각형 모양인데 본인을 제외한.

// [
//   [1, 4, 9, 4],
//   [2, 6, 11, 1],
//   [3, 7, 8, 2],
// ];

// 저장값 중 최대값이면 일단 마지막 열은 안탄다.
// 그럼 가중치에서 열을 기준으로 움직이면서 하면 될듯?
