// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input.slice(1).map((v) => Number(v));
const max = Math.max(...numbers);

const fib = {
  0: 1n,
  1: 1n,
  2: 2n,
  3: 4n,
};

for (let i = 4; i <= max; i++) {
  fib[i] = fib[i - 1] + fib[i - 2] + fib[i - 3] + fib[i - 4];
}

const answer = numbers.map((v) => fib[v].toString());
console.log(answer.join("\n"));
