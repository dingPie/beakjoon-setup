// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [n, road] = input[0].split(" ").map((v) => Number(v));

const shortcuts = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

console.log(n, road);
console.log(shortcuts);

const dp = Array(n + 1)
  .fill(0)
  .map((v) => Array(road).fill(0));

console.log(dp);

for (let i = 1; i <= n; i++) {
  const [s, e, l] = shortcuts[i - 1];
  // 겹칠때 안겹칠때 조건두고.
  // 안겹치면 이전 값 이어와서 더해주기. (이전값 어떻게 가져오지?)
  // 겹치면 현재값 / 이전값 비교해서 더 적합한거 적용

  for (let j = 0; j < e; j++) {
    dp[i][j] = dp[i - 1][j];
  }
  for (let j = e; j < road; j++) {
    // console.log("22", dp[i - 1][j], dp[i][j], dp[i][j] - (e - s - l));
    dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j] - (e - s - l));
  }
  console.log(dp[i].join(","));
}

// 하 ㅆㅂ ...모르겠다.
// 냅색 먼저 풀자...

// 냅색이랑 다르게 "이건 여기서 꼭 써야해!" 가 있지.
// 이후 전부가 아니라 빠지는 부분을 기록할까?
//겹치는 부분은 비교해서 더 나은 부분으로 적용.

// [0, 40, 40, 0, 0]
// 시작점과 끝점이 겹치면 넘어감? 하나만 비교? 현재값이랑 이전값 중?

// 안겹치면 그대로오 적용.
