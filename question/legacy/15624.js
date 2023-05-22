// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const number = Number(input);

const fib = {
  0: 0n,
  1: 1n,
};

for (let i = 2; i <= number; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  fib[i] = fib[i] % 1000000007n;
}

console.log(fib[number].toString());
