// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const dp = {
  1: 0,
  2: 2,
};

for (let i = 3; i <= 9; i++) {
  dp[i] = dp[i - 1] * 3;
}

console.log(dp[Number(input)]);

// const t = [0, 1, 2];

// const getCombination = (arr, n) => {
//   if (n === 1) return arr.map((v) => [v]);
//   const result = [];

//   for (let idx = 0; idx < arr.length; idx++) {
//     const fix = arr[idx];
//     if (fix === 0 && n === Number(input)) continue;
//     const combi = getCombination(arr, n - 1);
//     const attached = combi.map((v) => [fix, ...v]);

//     result.push(...attached);
//   }

//   return result;
// };

// const tt = getCombination(t, Number(input));
// const nums = tt.map((v) => Number(v.join("")));
// const answer = nums.filter((v) => v % 3 === 0).length;
// console.log(answer);
