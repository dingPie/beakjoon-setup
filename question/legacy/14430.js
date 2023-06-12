// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [col, row] = input[0].split(" ").map((v) => Number(v));

const board = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const dp = Array(col)
  .fill(0)
  .map(() => Array(row).fill(0));

for (let c = 0; c < col; c++) {
  for (let r = 0; r < row; r++) {
    if (r === 0 && c === 0) {
      dp[c][r] = board[c][r];
    } else if (c > 0 && r > 0) {
      dp[c][r] = Math.max(dp[c - 1][r], dp[c][r - 1]) + board[c][r];
    } else if (c === 0) {
      dp[c][r] = dp[c][r - 1] + board[c][r];
    } else if (r === 0) {
      dp[c][r] = dp[c - 1][r] + board[c][r];
    }
  }
}

console.log(dp[col - 1][row - 1]);

// 해당 위치까지 이동하면서 합쳐가는거?
// 위나 왼쪽에 자원이 있다면 합침?
// 현재칸, 위칸, 왼쪽칸?
