// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs
  .readFileSync(dir)
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const arr = [];

let prev = 0;
for (let i = 0; i < input.length - 1; i++) {
  const test = input.slice(prev + 1, prev + input[i] + 1);
  i += input[i];
  prev = i + 1;
  arr.push(test);
}

const test = arr.map((nums) => {
  const dp = Array(nums.length).fill(0);
  if (nums[0] > 0) dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] + nums[i] > 0) dp[i] = dp[i - 1] + nums[i];
  }
  const max = Math.max(...dp);

  return max === 0 ? Math.max(...nums) : max;
});

console.log(test.join("\n"));
