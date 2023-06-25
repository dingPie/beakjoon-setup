// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const raw = input.slice(1);

const arr = [];

for (let i = 1; i < raw.length; i += 3) {
  const r1 = raw[i].split(" ").map((v) => Number(v));
  const r2 = raw[i + 1].split(" ").map((v) => Number(v));
  arr.push([r1, r2]);
}

const answer = arr.map((v) => {
  const colLength = v.length;
  const rowLength = v[0].length;

  const dp = Array(colLength)
    .fill(0)
    .map(() => Array(rowLength).fill(0));

  dp[0][0] = v[0][0];
  dp[1][0] = v[1][0];

  for (let i = 1; i < rowLength; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2] || 0) + v[0][i];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2] || 0) + v[1][i];
  }

  return Math.max(dp[0].at(-1), dp[1].at(-1));
});

console.log(answer.join("\n"));

// 해당 칸에 다 더해진 상태에서 해야될거같고.
// 이미 지나온 곳에 대해서만 비교를 하면 되려나?

// 1. 500 -10 - 20 -> 470
// 2. 500 -10 - 20 - 10 -> 460

// 이거 원형 스티커 그거네

// 이제 dp를 써서 amp을 하면 되는데.
// 해당 셀을 뜯었을 때 최대값? 어떻게 찾아가지?

// 2차원의 dp...
// 잃는 값보다 큰지..?

// 1. 한 칸씩 없애가면서 최대값을 확인한다.
// 2. 한 칸씩 선택하면서 주번 값을 확인...

// 고르고 + 남은 값을 합산했을 때 큰 값?
