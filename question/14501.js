// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const arr = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const days = Number(input[0]);
// DP 풀이
const dp = Array(days).fill(0);

for (let i = 0; i < arr.length; i++) {
  const [period, price] = arr[i];
  if (days - i < period) continue; // 남은 날짜가 없으면 continue;
  dp[i] = dp[i] + price; // 현재 dp는 이전값 + 금액이다.

  // 현재 예약을 받았으면 그 이후 기간부터 상담이 가능하다.
  for (let j = i + period; j < arr.length; j++) {
    if (dp[i] > dp[j]) dp[j] = dp[i];
    // 현재 방식(예약) 으로 번 비용이 이전 방법으로 번 비용보다 많으면 갱신 (현재 i를 더해서 접근할 수 있는 이전 목록에 전부 접근함/)
  }
}
console.log(Math.max(...dp));

// 탐욕법 풀이
// const totalDay = Number(input[0]);
// let answer = 0;
// const find = (arr, day, total = 0) => {
//   if (day === 0 || !arr.length) {
//     if (total > answer) answer = total;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     const [period, price] = arr[i];
//     if (period <= day && period <= arr.length - i) {
//       find(arr.slice(i + period), day - period, total + price);
//     }

//     find(arr.slice(i + 1), day, total);
//   }
// };

// find(arr, totalDay);

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
