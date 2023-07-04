// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);

const arr = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    arr[i][j] += Math.max(arr[i - 1][j] || 0, arr[i - 1][j - 1] || 0);
  }
}

console.log(Math.max(...arr.at(-1)));
