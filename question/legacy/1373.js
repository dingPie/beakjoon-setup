// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
let input = fs.readFileSync(dir).toString().trim();

let answer = "";

while (!!input.length) {
  const a = parseInt(input.slice(-3), 2).toString(8);
  answer = a + answer;
  input = input.slice(0, -3);
}

console.log(answer);
