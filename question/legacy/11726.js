// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const fibonacci = (num) => {
  let prev = 1n;
  let curr = 1n;
  for (let i = 2; i <= num; i++) {
    const sum = curr + prev;
    prev = curr;
    curr = sum;
  }
  return curr;
};

console.log(Number(fibonacci(Number(input)) % 10007n));
// 피보나치와 같다.
