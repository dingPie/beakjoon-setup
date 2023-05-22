// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const number = Number(input);

const f = {
  0: 1,
  1: 1,
};

for (let i = 2; i <= number; i++) {
  f[i] = (f[i - 2] + f[i - 1] + 1) % 1000000007;
}

console.log(f[number]);
