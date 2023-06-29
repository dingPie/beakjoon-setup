// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const board = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const dp = Array(n)
  .fill(0)
  .map(() => Array(n).fill(0n));
dp[0][0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 0 || (i === n - 1 && j === n - 1)) continue;
    const left = board[i][j] + j;
    const down = board[i][j] + i;
    if (left < n) dp[i][left] += BigInt(dp[i][j]);
    if (down < n) dp[down][j] += BigInt(dp[i][j]);
  }
}

console.log(dp[n - 1][n - 1].toString());

// BFS 로 탐색? -> 같은 경로를 탐색하게 된 순간 이것도 성공하게 되어버림.
// 아니다. DFS만 탐색해서, 바로 이전 방문한 친구만 true로 바꿔주면,
// true에 를 밟는 애는 무조건 true, 그 이전애도 true로 바꿔주는 식으로.

// const find = (board) => {
//     const routes = Array(n)
//       .fill(0)
//       .map(() => Array(n).fill(0));

//     const need = [[0, 0]];
//     let result = 0n;

//     while (need.length) {
//       const [y, x] = need.pop();
//       const num = board[y][x];

//       if (y + num < n && board[y + num][x] === true) {
//         board[y][x] = true;
//         routes[y][x] = routes[y + num][x] + 1;
//         result += BigInt(routes[y][x]);
//       } else if (board[y][x + num] === true) {
//         board[y][x] = true;
//         routes[y][x] = routes[y][x + num] + 1;
//         result += BigInt(routes[y][x]);
//       } else {
//         if (y + num < n && board[y + num][x] !== 0) {
//           need.push([y + num, x]);
//         }
//         if (x + num < n && board[y][x + num] !== 0) {
//           need.push([y, x + num]);
//         }
//       }
//     }
//     console.log("dddd", routes);
//     return result;
//   };
