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
  .map((v, i) =>
    Array(n)
      .fill(0)
      .map((v, j) => ({ now: [i, j], prev: 0 }))
  );

dp[n - 1][n - 1] = true;

const need = [[0, 0]];
let answer = 0n;
while (need.length) {
  const [i, j] = need.pop();

  const d = board[i][j];
  if (d === 0) continue;
  if (
    (i + d < n && dp[i + d][j] === true) ||
    (j + d < n && dp[i][j + d] === true)
  ) {
    answer += 1n;
    let target = dp[i][j].prev;
    let [y, x] = target;
    dp[dp[i][j].now[0]][dp[i][j].now[1]] = true;
    while (!!target) {
      target = dp[y][x]?.prev;
      dp[y][x] = true;
    }
  }

  if (i + d < n && dp[i + d][j] !== true) {
    need.push([i + d, j]);
    dp[i + d][j].prev = [i, j];
  }
  if (j + d < n && dp[i][j + d] !== true) {
    need.push([i, j + d]);
    dp[i][j + d].prev = [i, j];
  }
}
// console.log(dp);
console.log(answer.toString());

// 너비탐색 BFS
// -> 이게 지금 시간초과라는 거잖아

// 거꾸로 찾아서 하나씩 true로 만들게끔?
// 숫자는 의미없고.
// dfs로 쭉 찾아서. 갈때까지 가고. 그거 다 true로?
// 어케 기록하지?
