// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const number = Number(input);

// 음수 피보나치?
// f(i) = f(i+2) - f(i+1)

// f(-1) = f(1) - f(0)
// f(-2) = f(0) - f(-1)

// f(-3) = f(-1) - f(-2) 1 + 2

const f = {
  0: 0,
  1: 1,
};

if (number === 0) {
  console.log("0\n0");
} else if (number > 0) {
  // 양수일 때
  for (let i = 2; i <= number; i++) {
    f[i] = (f[i - 1] + f[i - 2]) % 1000000;
  }
} else if (number < 0) {
  // 음수일 때
  for (let i = -1; i >= number; i--) {
    f[i] = (f[i + 2] - f[i + 1]) % 1000000;
  }
}

// 음수일때 절대값으로 다시계산하자.

console.log(`${number > 0 ? 1 : 1}\n${Math.abs(f[number])}`);
