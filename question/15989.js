// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map((v) => Number(v));

console.log(n, numbers);

// 순서가 다른건 같은걸로 침 -> 조합

const dp = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 7, //a 뭐지...
};

// 111, 12, 3
// 1111 112 13 22

// 5 -> 11111 1112 113 122 23
// 6 ->  111111 11112 1113 1122 123 222 33
