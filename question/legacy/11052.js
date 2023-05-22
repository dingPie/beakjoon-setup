// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

let cards = input[1]
  .split(" ")
  .slice(0, Number(input[0]))
  .map((v) => Number(v));

const arr = cards.map((v, i) => [i + 1, v]);
arr.sort((a, b) => b[1] / b[0] - a[1] / a[0]);

const dp = {};
cards.forEach((v, i) => {
  dp[i + 1] = v;
});

const need = Number(input[0]);

const find = (cost = 0) => {
  for (const idx in arr) {
    const [count, price] = arr[idx];
    if (cost + count <= need && price + dp[cost] > dp[count + cost]) {
      dp[count + cost] = price + dp[cost];
      find(count + cost);
    }
  }
};

for (const [cost, price] of arr) {
  find(cost);
}
console.log(dp[need]);

// const arr = cards.map((v, i) => ({
//   cost: v / (i + 1),
//   count: i + 1,
//   total: v,
// }));

// const test = (arr, sum = 0, need = Number(input[0])) => {
//   console.log("실행");
//   arr.forEach((target, idx, origin) => {
//     if (dp[Number(input[0]) - (need - target.count)] <= sum + target.total) {
//       for (let j = 1; j * target.count <= need; j++) {
//         dp[Number(input[0]) - (need - target.count * j)] =
//           sum + target.total * j;
//         test(arr, sum + target.total * j, need - target.count * j);
//       }
//     }
//   });
// };
// test(costAverage);

// DP에서 하나씩 갱신해가는 그런그림 ㄱ

// 단가가 가장 비싼거부터 했으면 이제 그 뒤는 없어도 되잖아
// 단가가 비싼거부터 찾고.
// 그 뒤에 가능한걸 이어붙여서 되는 금액대를 찾는 방법.
// 되는만큼 하는건 아닌거같고.
// n을 n개만큼 먹고. 그다음 진행 근데 이게 DP가 맞나?
//

// 1. 하나를 뽑는다.
// 2. 남은 금액대중 하나를 뽑을 수 있는 조합?
// 근데 이걸 DP를 활용해서 어떻게 줄이지? 조합을 구하는 도중 컷?
// 일단 큰 수부터 하는게 낫긴 한듯. 그래야 점점 접근할 수 있는 범위가 작아지니까.

// 12
// 1 1 6 8 11 1 1 1 1 1 1 1
// 11 + 8 + 6
// 5 + 4 + 3

// 뭐를 먼저 탐색하고 뭐를..얼마나 탐색하느냐 인데
// 1. 가장 평균가격이 높은거 먼저. N개로 꽉 채울떄가지.
// 2. 그다음 평균 가격이 놓은거.

// 아니다. 결국 핵심은 M 개를 써서 N개를 꽉 채우는거 같은데
// 근데 이렇게 조합을 하게되면 N이 1000이, 카드가 1000개일떄 시간소모가 너무 심할듯 (중복으로도 뽑을수 있으니까.)

// 어떻게 DP로 풀 것인가. N개를 깠을때 가장 높은 값?
// 나머지는? 5511의 케이스가 아니라 543의 케이ㄱ스가 있어서 이런건데.
// 일단 값이 비싼애부터 하긴 하고.
// 해당 수 까지 값이 없거나 더 작은 새로운 값이면 시도?
// 이번에 끼운애가 불가능하거나

// 만약 12중 5를 넣었을 때, 이제 나머지 값들을 어떻게 설계하느냐가 포인트.
// 1~need까지 생성 후, 전부 Infinity로?
//

// 큰 수부터?

// 비싼 카드부터 몇개씩 넣는지?
// 일단 arr 자르는건 맞고
// 그다음 제일 높은 값을 1개, 2개... n개 넣을때 까지 테스트.

// 가격이 비싸면 높은 등급의 카드가 많이 들어있을 것이라는 미신
// 돈을 최대한 많이 지불해서 카드를 사려고함 (흑우임? )

// 카드가 i개 포함된 카드팩의 가격은 Pi원

// 각 cards의 index가 가장.. 음.
// 일단 그럼 평균가격을 먼저 구한다음에
// 평균가격이 높은 가격순으로?
// 근데 불가능한게 있을수있음.

// let answer = 0;
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   let need = Number(input[0]);
//   for (let j = i; j < arr.length; j++) {
//     const t = arr[j];
//     while (need - t.count >= 0) {
//       sum += t.total;
//       need -= t.count;
//     }
//     if (need <= 0) {
//       console.log(t, sum);
//       break;
//     }
//   }
//   if (need === 0 && sum > answer) answer = sum;
// }
// console.log(answer);
