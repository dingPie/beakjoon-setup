// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const number = Number(input);

const fib = {
  1: 1n,
  2: 1n,
  3: 1n,
};

for (let i = 4; i <= number; i++) {
  fib[i] = fib[i - 3] + fib[i - 1];
}

console.log(fib[number].toString());
