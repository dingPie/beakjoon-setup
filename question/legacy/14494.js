// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");
const [n, m] = input.map((v) => Number(v));

const d = Array(n)
  .fill(0)
  .map((v, rIdx) => Array(m).fill(1));

for (let i = 1; i < n; i++) {
  for (let j = 1; j < m; j++) {
    d[i][j] = (d[i - 1][j] + d[i][j - 1] + d[i - 1][j - 1]) % 1000000007;
  }
}
console.log(d[n - 1][m - 1]);

// 0 1 1 2 3 5 8 13 21 34 55 89 144

//   "1,2": 1,
//   "2,1": 1,
//   "2,2": 3, // 3개 아냐..?
//   "3,1": 1,
//   "1,3": 1,
//   "3,2": 5,

// 2 1 -> 5
// 3 4 -> 129

// 1, 2 -> 1
// 2, 1 -> 1
// 2, 2 -> 3
// 1, 3 -> 1
// 3, 2 -> 5

// 1, 2 -> 1
// 2, 2 -> 3
// 2, 3 -> 5
// 3, 3 -> 6 + 5 -> 11
// 2, 4 -> 9
