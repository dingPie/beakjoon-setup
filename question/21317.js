// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const k = Number(input.at(-1));

if (n === 1) {
  console.log(0);
  return;
}

const arr = input.slice(1, n).map((v) => v.split(" ").map((v) => Number(v)));

// 스킵할 곳 찾기
let maxValue = k;
let maxIndex = -1;
for (let i = 0; i < n - 3; i++) {
  const t1 = arr[i][0] + arr[i + 1][0] + arr[i + 2][0];
  const t2 = arr[i][1] + arr[i + 2][0];
  const t3 = arr[i][0] + arr[i + 1][1];
  const target = Math.min(t1, t2, t3);

  if (maxValue < target) {
    maxValue = target;
    maxIndex = i;
  }
}

// skip할 떄
if (maxIndex !== -1) {
  if (n === 4) {
    console.log(k);
    return;
  }
  const dp = Array(n - 3).fill(0);
  dp[0] = k;
  dp[1] = arr[0][0] + dp[0];
  const tArr = [...arr.slice(0, maxIndex), ...arr.slice(maxIndex + 3)];

  for (let i = 2; i < n - 3; i++) {
    const one = tArr[i - 1][0];
    const two = tArr[i - 2][1];
    dp[i] = Math.min(dp[i - 1] + one, dp[i - 2] + two);
  }

  const answer = dp.at(-1);
  console.log(answer);
} else {
  // skip 안할 떄
  const dp = Array(n).fill(0);
  dp[1] = arr[0][0];

  for (let i = 2; i < n; i++) {
    const one = arr[i - 1][0];
    const two = arr[i - 2][1];
    dp[i] = Math.min(dp[i - 1] + one, dp[i - 2] + two);
  }

  let answer = dp.at(-1);
  console.log(answer);
}

// 두번 k로 점프하는걸 막아야 한다.
// 그럼 뛰어넘는걸 고려해서...음..

// 여기서 k로 스킵했을때 한번씩?

// n번쨰 에서 k를 뛰었을 때 경우를 다시 한번 해보면 되는데.

// 3칸 건너뛰는걸 막는 조건은
// 1칸 1칸 1칸
// 1칸 2칸
// 2칸 1칸

// 건너뛰는 경우의 수를 찾아서 가장 크게 건너뛰는걸 찾은 다음에
// 건너뛴 부분을 제외하고 dp를 만들어주자.
// 아냐!  이렇게 하면 남은 부분이 더 큰 경우가 생겨!

// 아니지? 가장 스킵했을 때 큰 부분은?
// 최소값 중 큰값?
