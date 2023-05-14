// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let number = Number(input);
const arr = [number];
let answer = 0;
while (arr.length) {
  const target = arr.pop();
  if (target % 2 === 0) {
    const a = target / 2;
    answer += a * a;
    if (a > 1) {
      arr.push(a);
      arr.push(a);
    }
  } else {
    const a = Math.ceil(target / 2);
    const b = Math.floor(target / 2);
    answer += a * b;
    if (a > 1) arr.push(a);
    if (b > 1) arr.push(b);
  }
}

console.log(answer);
// 4 4 16
// 22 4
// 22 4
// 11 1
// 11 1
// 11 1
// 11 1
// 16 + 8 + 4

// 3 2 6
// 2 1 2
// 11 1
// 11 1
