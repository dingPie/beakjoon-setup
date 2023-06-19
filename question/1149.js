// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);

const colors = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

for (let i = 1; i < n; i++) {
  colors[i][0] += Math.min(colors[i - 1][1], colors[i - 1][2]);
  colors[i][1] += Math.min(colors[i - 1][0], colors[i - 1][2]);
  colors[i][2] += Math.min(colors[i - 1][0], colors[i - 1][1]);
}

console.log(Math.min(...colors.at(-1)));
