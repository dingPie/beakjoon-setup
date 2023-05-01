// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const [n, r] = input.split(" ").map((v) => Number(v));

const getZero = (num) => {
  let two = 0;
  let five = 0;
  let s = 1;
  while (s <= num) {
    if (s % 2 === 0) two++;
    if (s % 5 === 0) five++;
    s++;
  }
  return Math.min(two, five) - 1;
};

console.log(getZero(n), getZero(n) - getZero(n - r));

const getPactorial = (start, end = 0) => {
  let answer = 1n;
  while (start > end) {
    answer *= BigInt(start);
    start--;
  }
  return answer;
};
console.log(
  getPactorial(n, r),
  getPactorial(n - r),
  getPactorial(n, r) / getPactorial(n - r)
);

// const answer = getPactorial(n, r) / getPactorial(n - r);
// const str = answer.toString();
// console.log(
//   getPactorial(n, r),
//   getPactorial(n - r),
//   getPactorial(n, r) / getPactorial(n - r)
// );
// for (let i = 0; i < str.length; i++) {
//   if (str[str.length - i - 1] !== "0") {
//     console.log(i);
//     return;
//   }
// }
