// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

// 피보나치 구한다음에
// 맨 뒤 두개 *2 씩 해서 더하면 끝

const fib = [0n, 1n];

const getFib = (num) => {
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
};

getFib(Number(input));

console.log(fib[input].toString());
