// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
let num = Number(input);
let answer = 1n;

while (num > 0) {
  answer *= BigInt(num);
  num--;
}
const str = answer.toString();

for (let i = 0; i < str.length; i++) {
  if (str[str.length - i - 1] !== "0") {
    console.log(i);
    return;
  }
}
console.log(0);
