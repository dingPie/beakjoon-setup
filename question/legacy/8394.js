// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const number = Number(input);

const f = {
  1: 1,
  2: 2,
};
for (let i = 3; i <= number; i++) {
  f[i] = Number((f[i - 1] + f[i - 2]).toString().at(-1));
}
console.log(f[input]);
