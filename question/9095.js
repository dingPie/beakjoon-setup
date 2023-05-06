// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input.slice(1).map((v) => Number(v));

const arr = [1, 2, 3];

const answer = numbers.map((number) => {
  let result = 0;
  const getNums = (num) => {
    if (num === 0) result++;
    arr.forEach((n) => {
      if (num - n >= 0) {
        getNums(num - n);
      }
    });
  };
  getNums(number);
  return result;
});

console.log(answer.join("\n"));
