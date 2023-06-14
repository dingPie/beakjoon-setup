// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const numbers = input.slice(1).map((v) => Number(v));

// const dp = [...numbers];
const dp = Array(cnt).fill(0);
dp[0] = numbers[0];

for (let i = 1; i < cnt; i++) {
  for (let j = 0; j < i; j++) {
    //
  }
}
// 다시풀어보자!

console.log(Math.max(...dp));
// 안먹을때는 이전까지의 dp
// 먹을때는 확인하면서 더하면 되나? -> 이것도 dp에서 확인해야 할 듯?

// (파티의 만족도) = (파티가 열리는 동안 서울이가 먹은 모든 간식의 평점의 합)

// 작큰수랑 비슷한듯? 근데 합을 따져야 함.
// 해당 수를 먹었을 때 / 안먹었을 때 나뉘면서 확인
// 이전 dp에, 이걸 먹었을 때 / 안먹었을 때 를 다 비교하면서 가면 되나?
