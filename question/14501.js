// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
let day = Number(input[0]);
const arr = input.slice(1).map((v) => v.split(" "));
console.log(arr);

// 일단 N이 크지 않으니, (최대 15) 부담은 없다.
// n일을 진료하기로 선택했을 때..
// 남은 경우의 수
// 거기서 탐색, dp 어떻게 활용하지?
// 재귀형태, dp객체 이용?

// 1. 배열과 남은 day를 넣는다.
// 2. 배열부터 각 day를 선택할 때 일자만큼 배열을 잘라 재귀형태로 실행한다.
// 3. day가 0이거나, 더 실행할 수 있는 값이 없을 때 answer 값을 비교한다.

// 이렇게 find로 해본 후, dp를 활용하거나
// (남은 배열을 dp로? N을 선택했을 때 최대값을 dp로?) / N day 까지 진행했을 때 최대값은? - dp로. -> 이걸 갱신해가면서 마지막 day에서 최대값을 뽑자.
// 여러 방법으로 최적화한다.

// 각 day별 최대값 dp 초기화
const dp = {};
for (let i = 0; i <= day; i++) dp[i] = 0;
console.log(dp);
