// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const number = Number(input);

const f = { 0: 0 };
const fib = (n) => {
  f[1] = 1n;
  f[2] = 1n;
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
    // delete f[i - 3]; // 삭제하면 시간초과;
  }
  return f[n];
};

fib(number);

console.log(`${(f[number] % 1000000007n).toString()} ${number - 2}`);

// 메모리 초과 어이가 없네...ㅋㅋㅋ 지워야되나 이전 객체를
