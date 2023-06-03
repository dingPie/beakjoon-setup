// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);

const costs = input[1].split(" ").map((v) => Number(v));
const points = input[2].split(" ").map((v) => Number(v));

const HP = 99; // 최대 사용 가능한 HP

const dp = Array(cnt + 1) // 0인 이전 값에 접근하기 떄문에 cnt +1 한 길이의 빈 dp를 생성해준다.
  .fill(0)
  .map((v) => Array(HP + 1).fill(0));

for (let i = 1; i < cnt + 1; i++) {
  const cost = costs[i - 1]; // cost/ point는 length-1까지만 있기 때문에.
  const point = points[i - 1];
  for (let j = 1; j <= HP; j++) {
    if (j >= cost) {
      // 현재 HP를 감당할 수 있을 떄
      // 이번 사람을 만나지 않았을 때 최대값과  vs 이번 사람을 만나고 + 그 만난 나머지 만큼의 HP로 사람을 만났을 때 최대값을 비교해서 그 둘 중 큰 값으로 해준다.
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - cost] + point);
    } else {
      // cost가 100일 경우가 있기 때문에 이전 값을 그대로 가져오는 조건을 추가해준다.
      dp[i][j] = dp[i - 1][j];
    }
  }
}

console.log(dp.at(-1).at(-1));
