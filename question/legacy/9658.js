// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const dp = {
  1: false,
  2: true,
  3: false,
  4: true,
};

const arr = [1, 3, 4];

for (let i = 5; i <= Number(input); i++) {
  const result = arr.some((v) => !dp[i - v]);
  dp[i] = result;
}
const answer = dp[input] ? "SK" : "CY";
console.log(answer);

// 상근이가 먼저 시작, 마지막으로 가져가면 지게됨.
// 특정 시도를 n이라고 했을 떄 true냐 false냐
// 1, 3, 4가 다 true면 false가 됨.

// (지는사람)
// 1. 상근 -> 상근
// 2. 상근 창영 -> 창영
// 3. 상근 창영 상근 -> 상근
// 4. 상근3 창영 -> 창영
// 5. 상근4 창영 -> 창영
// 6. 상근3 창영1 상근1 창영1 -> 창영
// 7. 상근4 창영1 상근1 창영1 -> 창영
// 8. 상3 창4 상1 -> 상근
