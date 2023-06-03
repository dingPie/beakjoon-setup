// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));

let idx = 0;
let jump = 0;

if (cnt === 1) {
  console.log(0);
  return;
}

if (numbers[idx] === 0) {
  console.log(-1);
  return;
}

while (idx < cnt - 1) {
  const cell = numbers[idx];
  let nextIdx = 1;

  for (let i = 2; i <= cell; i++) {
    if (idx + i >= cnt - 1) {
      nextIdx = i;
      break;
    }
    if (numbers[idx + i] + i >= numbers[idx + nextIdx] + nextIdx) nextIdx = i;
  }

  if (numbers[idx + nextIdx] === 0) {
    jump = -1;
    break;
  }

  jump += 1;
  idx += nextIdx;
}

console.log(jump);
