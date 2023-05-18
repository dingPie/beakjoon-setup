// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const arr = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));
const max = Math.max(...arr.map((v) => v[0]));

const dp = {
  0: 0n,
  1: 1n,
  2: 1n,
};

for (let i = 3; i <= max; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

const answer = arr.map(([p, q], idx) => {
  return `Case #${idx + 1}: ${dp[p] % BigInt(q)}`;
});

console.log(answer.join("\n"));
