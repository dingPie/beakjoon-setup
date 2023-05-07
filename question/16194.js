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
arr.sort((a, b) => a[1] / a[0] - b[1] / b[0]);

const dp = {};
cards.forEach((v, i) => {
  dp[i + 1] = v;
});

const need = Number(input[0]);

const find = (prev = 0) => {
  for (const idx in arr) {
    const [curr, price] = arr[idx];
    if (prev + curr <= need && price + dp[prev] < dp[curr + prev]) {
      dp[curr + prev] = price + dp[prev];
      find(curr + prev);
    }
  }
};

for (const [cost, price] of arr) {
  find(cost);
}
console.log(dp[need]);
