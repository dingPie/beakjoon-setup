// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
let input = fs.readFileSync(dir).toString().trim();

let answer = parseInt(input[0], 8).toString(2);

for (let i = 1; i < input.length; i++) {
  let t = parseInt(input[i], 8).toString(2);
  while (t.length < 3) {
    t = "0" + t;
  }
  answer += t;
}

console.log(answer);

// -32 + 16 - 4 +2 + 1
