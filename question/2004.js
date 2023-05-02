// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const [n, r] = input.split(" ").map((v) => Number(v));

const getZero = (end, start = 1) => {
  let five = 0;

  while (start <= end) {
    if (start % 5 === 0) {
      let t = start;
      while (t % 5 === 0) {
        five++;
        t = t / 5;
      }
    }
    start++;
  }
  return five;
};

console.log(getZero(n, r) - getZero(n - r));

const getPactorial = (start, end = 0) => {
  let answer = 1n;
  while (start > end) {
    answer *= BigInt(start);
    start--;
  }
  return answer;
};
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
