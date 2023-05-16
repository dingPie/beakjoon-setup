// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const digit = Number(input);

const fib = {
  1: 1n,
  2: 2n,
};

for (let i = 3; i <= digit; i++) {
  fib[i] = (fib[i - 2] + fib[i - 1]) % 15746n;
}

console.log(fib[digit].toString());

// const digit = 4;

// for (let i = 2 ** (digit - 1); i < 2 ** digit; i++) {
//   if (!i.toString(2).includes("101")) {
//     console.log(i.toString(2));
//   }
// }

// 결국 또 피보나치..

// 이거 이진수 변환이 문제가 아니라
// 앞에가 00이 들어가도 됨. 그럼 찾는 조건을 다양화 해야겠는데?
// 00 과 1을 써서 n자리를 만들게끔.
// 근데 점화식 형태로 가는 수밖에 없을것같은데.

// n = 1 1
// n = 2 00 11
// n = 3 001 100 111
// n = 4 0011 0000 1001 1100 1111
// n = 5 00001 00100 10000 00111 10011 11001 11100 11111
// n = 6 000000 000011 001001 001100 100100 100001 110000 001111 100111 110011 111001 111100 111111
