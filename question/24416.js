// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let answer1 = 0;
const fib1 = (n) => {
  if (n === 1 || n === 2) {
    answer1++;
    return 1;
  } else {
    return fib1(n - 1) + fib1(n - 2);
  }
};
fib1(input);

let answer2 = 0;
const fib2 = (n) => {
  const f = {};
  f[1] = 1;
  f[2] = 1;
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
    answer2++;
  }
  return f[n];
};

fib2(input);
console.log(`${answer1} ${answer2}`);
