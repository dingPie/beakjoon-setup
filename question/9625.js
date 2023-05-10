// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const number = Number(input);

const fib = [0, 1];

for (let i = 2; i <= number; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(`${fib[number - 1]} ${fib[number]}`);

// 버튼 한 번 눌렀을때 a -> b, b -> ba

// 이거 늘어나는 패턴 분석해서 다시해보자. (메모리 초과)
