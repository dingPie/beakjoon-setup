// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));

const dp = [0n];
let prev = 0n;
let curr = 0n;

const t = BigInt(10 ** 9 + 7);

for (let i = 0; i < cnt - 1; i++) {
  const sum = (dp.at(-1) + 1n) * BigInt(numbers[i]);
  dp.push(sum);
  const memo = curr;
  curr = (curr + 1n) * BigInt(numbers[i]) + prev;
  prev = memo;
  console.log(prev, curr);
}
친;
// 무슨 문제냐...

const answer = dp.reduce((a, c) => a + c, 0n) % t;

console.log(dp);
console.log(answer.toString(), prev + curr);

// 하.. d이거 배열이 아니라 상수로 관리하는 법을 알아야 함..

// 1 5 15 -> 1 6 20
// 2 6 28 -> 2 8 36

// 이렇게 완전히 하나의 상수로 이해될 수 있게끔.

// prev, curr 두개로 운용?
