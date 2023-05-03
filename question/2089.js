// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let number = Number(input);

let answer = "";

const find = (num = 0, str = "", binaryIdx = 0) => {
  if (num === number) {
    answer = str;
    return str;
  }
  const target = binaryIdx % 2 === 0 ? 2 ** binaryIdx : -(2 ** binaryIdx);
  if (Math.abs(number * 4) < Math.abs(target)) return;

  const added = "1" + str;
  const skipped = "0" + str;

  find(num + target, added, binaryIdx + 1);
  find(num, skipped, binaryIdx + 1);
};

if (number % 2 === 0) find(0, "0", 1);
else find(1, "1", 1);

console.log(answer);
