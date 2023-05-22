// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const answer = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  if (answer[input.charCodeAt(i) - 97] === -1)
    answer[input.charCodeAt(i) - 97] = i;
}

console.log(answer.join(" "));
