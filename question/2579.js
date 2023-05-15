// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const stairs = input.map((v, i) => (i === 0 ? 0 : Number(v)));

const dp = {
  0: 0,
  1: stairs[1],
  2: stairs[1] + stairs[2],
};

for (let i = 3; i < stairs.length; i++) {
  //   console.log(i, stairs[i] + stairs[i - 1] + dp[i - 3], stairs[i] + dp[i - 2]);
  dp[i] = Math.max(
    stairs[i] + stairs[i - 1] + dp[i - 3],
    stairs[i] + dp[i - 2]
  );
}

console.log(dp[input[0]]);
