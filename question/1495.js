// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [n, s, m] = input[0].split(" ").map((v) => Number(v));
const volumes = input[1].split(" ").map((v) => Number(v));

const dp = Array(n + 1)
  .fill(0)
  .map((v) => Array(m + s + 1).fill(false));

dp[0][s] = true;

const find = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!dp[i][j]) continue;
      if (j - volumes[i] >= 0) dp[i + 1][j - volumes[i]] = true;
      if (j + volumes[i] <= m) dp[i + 1][j + volumes[i]] = true;
    }

    const isFail = dp[i + 1].every((v) => !v);
    if (isFail) {
      return -1;
    }
  }

  const last = dp.at(-1);
  for (let i = m; i >= 0; i--) {
    if (last[i]) {
      return i;
    }
  }
};

const answer = find();

console.log(answer);

// 이거 냅색이랑 비슷한거같은데.?
// 각 index별로 풀기! (1 ≤ N ≤ 50, 1 ≤ M ≤ 1,000, 0 ≤ S ≤ M)
// 51, 1001 개의 배열 만들어서 풀기.

//d 아니지. n, m으로 만들어서 해도 되겠는데?
// 그 다음 그 수가 있는지 검사하면 되는거니까.
// false로 만든 다음, 특정수만 true로 !
