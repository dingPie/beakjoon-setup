// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((v) => Number(v));

const board = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const find = () => {
  const dp = Array(n)
    .fill(0)
    .map((v) => Array(m).fill(Infinity));

  const need = [[0, 0]];
  dp[0][0] = 0;

  while (!!need.length) {
    const [y, x] = need.shift();
    const leng = board[y][x];

    for (let i = 1; i <= leng; i++) {
      if (y + i > n - 1) {
        break;
      }
      if (dp[y][x] + 1 < dp[y + i][x]) {
        need.push([y + i, x]);
        dp[y + i][x] = dp[y][x] + 1;
      }
    }

    for (let i = 1; i <= leng; i++) {
      if (x + i > m - 1) {
        break;
      }
      if (dp[y][x] + 1 < dp[y][x + i]) {
        need.push([y, x + i]);
        dp[y][x + i] = dp[y][x] + 1;
      }
    }
  }
  return dp;
};

const answer = find();

console.log(answer[n - 1][m - 1]);

// 일단... 각 칸에서 꺾어서는 못가지만 두 가지 모두 갈 수 있다.
// dfs 방식으로 하면 되려나?

// 해당 칸에 적힌 숫자 이하로 다 이동 가능!

// 각 격자의 dp?
