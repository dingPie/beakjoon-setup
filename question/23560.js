// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let n = Number(input);
console.log(2 * 3 ** (n - 1));

// 아래 로직으로 dp 확인후 위 로직으로 변경

// const arr = Array(n)
//   .fill(0)
//   .map((v) => [1, 2, 1])
//   .flatMap((v) => v);

// console.log(arr);

// let answer = 0;

// const find = (arr) => {
//   if (arr.length === 0) {
//     answer++;
//     return;
//   }
//   const isEat = arr.length % 3 === 2 ? 2 : 1;
//   if (arr[0] === isEat) find(arr.slice(1));
//   if (arr.at(-1) === isEat) find(arr.slice(0, arr.length - 1));
// };

// find(arr);

// console.log(answer / 2);
