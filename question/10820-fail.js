// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().split("\n");

// 소문자, 대문자, 숫자, 공백 의 갯수를 구하기.
const answer = [];

const lower = /[a-z]/;
const upper = /[A-Z]/;
const num = /\d/;

for (let i = 0; i < input.length; i++) {
  const line = input[i];
  const result = [0, 0, 0, 0];
  for (let j = 0; j < line.length; j++) {
    if (lower.test(line[j])) {
      result[0] += 1;
    } else if (upper.test(line[j])) {
      result[1] += 1;
    } else if (num.test(line[j])) {
      result[2] += 1;
    } else if (line[j] === " ") {
      result[3] += 1;
    }
  }
  answer.push(result.join(" "));
}

answer.forEach((v) => {
  console.log(v);
});
