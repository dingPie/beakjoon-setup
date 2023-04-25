// 1. 하나의 값을 입력받을 때
const dir = "./test/17413.txt";
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const answer = [];

let i = 0;
while (i < input.length) {
  if (input[i] === "<") {
    let str = "<";
    while (input[i] !== ">" && i < input.length) {
      i++;
      str += input[i];
    }
    i++;
    answer.push(str);
  } else if (input[i] === " ") {
    answer.push(" ");
    i++;
  } else {
    const arr = [];
    while (input[i] !== "<" && input[i] !== " " && i < input.length) {
      arr.push(input[i]);
      i++;
    }

    answer.push(arr.reverse().join("").trim());
  }
}

console.log(answer.join("").trim());
