// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map((v) => Number(v));
let max = Math.max(...numbers);

console.log(n, numbers);

// 짝수일 경우 -> 앞 뒤가 같아야 함.
// 홀수일 경우 -> 가운데를 제외한 앞 뒤가 같아야 함.
// 각 숫자별로 펠린드롬인지 계산하면 될듯?

const dp = {
  1: 1,
};

const solution = (num) => {
  const dp = {
    0: 0,
    1: 1,
  };
  for (let i = 2; i <= num; i++) {}
};

// 0: 0
// 1: 1
// 2: 2 11
// 3: 3 111
// 4: 4 22 1111 121 4 -> 2 -> 1
// 5: 5 131 212 11111 5 -> 2 -> 1
// 6: 6 141 33 222 1221 11211 111111 -> 6 -> 3 - 1
// 7: 7 151 232 11311 21112 112211 1111111 7 -> 3 -> 1

// 가운데 놔두고 재귀식?  -2씩?
// 6 -> 4 -> 2 / ?
