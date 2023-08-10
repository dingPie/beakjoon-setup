// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const [n, x] = input.map((v) => Number(v));

const dp = {
  0: 1,
};

for (let i = 1; i <= 50; i++) {
  dp[i] = dp[i - 1] * 2 + 1;
}

const getAnswer = (n, x) => {
  if (x === 0) return 0;
  if (n === 0) return 1;
  if (dp[n] < x) return dp[n - 1] + 1 + getAnswer(n - 1, x - dp[n]);
  else if (dp[n] === x) return dp[n - 1] + 1;
  else return getAnswer(n - 1, x - 1);
};

const answer = getAnswer(n, x);

console.log(answer);

// 재귀로 다시해보자!

// 아래만 x장 쳐먹은게 히트네;
// 갯수 계산은 쉬운데,

// 0. P // [1] (1)
// 1. B P P P B; // [0, 1, 2, 3, 3] (1 * 2 + 3)
// 2. B BPPPB P BPPPB B; [0, 0, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7] (5 * 2 + 3)
// 3. B BBPPPBPBPPPBB P BBPPPBPBPPPBB B; (13 * 2 + 3)
// [0, 0, 0, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7, 8, 8, 8, 9, 10, 11, 11, 12, 12, 13, 14, 15, 15, 15]

// 이전 배열을 가져다가 만들고
// 중간에 더하기 0을 하거나..하는식으로?

// 재귀?

// 총 갯수
// (n-1) * 2 + 1
