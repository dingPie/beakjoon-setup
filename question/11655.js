// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString();

const answer = input.split("").map((v) => {
  if (
    (v.charCodeAt(0) > 64 && v.charCodeAt(0) < 91) ||
    (v.charCodeAt(0) > 96 && v.charCodeAt(0) < 123)
  ) {
    if (v.charCodeAt(0) > 96) {
      let num = v.charCodeAt(0) + 13;
      if (num > 122) num -= 26;
      return String.fromCharCode(num);
    } else {
      let num = v.charCodeAt(0) + 13;
      if (num > 90) num -= 26;
      return String.fromCharCode(num);
    }
  } else {
    return v;
  }
});

console.log(answer.join(""));
