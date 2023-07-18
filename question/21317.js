// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const k = Number(input.at(-1));

const arr = input.slice(1, n).map((v) => v.split(" ").map((v) => Number(v)));

const dp = Array(n).fill(0);
dp[1] = arr[0][0];

for (let i = 2; i < n; i++) {
  const [one, two] = arr[i - 2];
  dp[i] = Math.min(dp[i - 1] + one, dp[i - 2] + two);
  // console.log(one, two, dp);
}

let answer = dp.at(-1);
console.log(arr);

for (let i = 0; i < n - 3; i++) {
  // dp[i + 3] = Math.min(dp[i + 3], dp[i] + k);
  const t = arr.at(-1) + arr[i] - arr[i + 3] + k;
  const t1 = arr[i][0] + arr[i + 1][0] + arr[i + 2][0];
  const t2 = arr[i][1] + arr[i + 2][0];
  const t3 = arr[i][0] + arr[i + 1][1];

  console.log("test", t1, t2, t3);
}

console.log(dp);

// 두번 k로 점프하는걸 막아야 한다.
// 그럼 뛰어넘는걸 고려해서...음..

// 여기서 k로 스킵했을때 한번씩?

// n번쨰 에서 k를 뛰었을 때 경우를 다시 한번 해보면 되는데.

// 3칸 건너뛰는걸 막는 조건은
// 1칸 1칸 1칸
// 1칸 2칸
// 2칸 1칸
