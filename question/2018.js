// 1. 하나의 값을 입력받을 때(
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const number = Number(input);

let answer = 1;

let sIdx = 0;
let eIdx = 1;
let sum = 0;
while (sIdx < number - 1) {
  if (number[sIdx] > number / 2) break;
  if (sum < number) {
    sum += eIdx;
    eIdx++;
  } else if (sum > number) {
    sum -= sIdx;
    sIdx++;
  } else if (sum === number) {
    sum += eIdx;
    eIdx++;
    answer++;
  }
}

console.log(answer);
