// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const leng = Number(input[0]);
const arr = input[1].split(" ").map((v) => Number(v));

const dp = Array(leng)
  .fill(0)
  .map((v) => ({ up: 1, down: 1 }));

for (let i = 1; i < leng; i++) {
  if (arr[i - 1] < arr[i]) {
    dp[i].up = dp[i - 1].up + 1;
  } else if (arr[i - 1] > arr[i]) {
    dp[i].down = dp[i - 1].down + 1;
  } else {
    dp[i].up = dp[i - 1].up + 1;
    dp[i].down = dp[i - 1].down + 1;
  }
}

const ups = dp.map((v) => v.up);
const downs = dp.map((v) => v.down);

console.log(Math.max(...ups, ...downs));

// 일단 최소는 2, 최대는 첫 input만큼이 됨.
// n 번까지 계속 해보는건 특정한 경우에 엄청 반복될 수 있음.
// n번째까지 진행했을 때, 길이와 up / down을 기록,
// 그걸 다음에 가면서 계속 갱신?
// 그럼 up / down case 둘다 해야되지 않나? (길이 2짜리 배열?)

// 근데 이 기조가 바뀌면 -1을 해줘야되나?
