// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map((v) => Number(v));

console.log(n, numbers);

// 계단문제처럼 풀어야되는데.
// 현재 잔을 마실때와 안마실때로 나누면 되나?
// 마지막으로 뭘 먹었는지 기록해야되나 ...?

const dp = Array(n).fill(0);
dp[0] = numbers[0];
dp[1] = numbers[1] + numbers[0];

for (let i = 2; i < n; i++) {
  const t1 = numbers[i - 1] + numbers[i] + (dp[i - 3] || 0);
  const t2 = numbers[i - 2] + numbers[i] + (dp[i - 3] || 0);
  const t3 = numbers[i - 1] + numbers[i - 2] + (dp[i - 3] || 0); // 이건 그냥 현재를 선택하지 않은 이전값?
  dp[i] = Math.max(t1, t2, t3);
  console.log(dp[i - 2], dp[i]);
}

console.log(dp);

// dp -3만 이용하면 오류가 난다. 각 상대적인 dp를 잘 적용해보자.
