// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);

const arr = input.slice(1).map((v) => Number(v));

const max = Math.max(...arr);

const dp = {
  1: Array(10).fill(1n),
};

for (let i = 2; i <= max; i++) {
  const arr = [1n];
  const target = dp[i - 1];

  for (let j = 1; j < target.length; j++) {
    const value = arr.at(-1) + target[j];
    arr.push(value);
  }
  dp[i] = arr;
}

const answer = arr.map((v) => {
  const value = dp[v].reduce((a, c) => a + c, 0n).toString();
  return value;
});

console.log(answer.join("\n"));

// 00 01 ... 09  -> 10
// 11 ... 19 -> 9
//... 99 -> 1
// 1...10 -> 55

// 99 -> 10
// 89

// 00 (0만 10개씩)
// 11 (0~1 9개씩) 9 * 2
//  ...
// 77 78 79 3 * 7 (0~7 3개씩)
// 88 89 2 * 9 (0~8 2개씩)
// 99 1 * 10 (0~9 1개씩)
