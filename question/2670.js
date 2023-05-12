// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input.slice(1).map((v) => Number(v));

const arr = [numbers[0]];
for (let i = 1; i < numbers.length; i++) {
  if (arr.at(-1) * numbers[i] > 1 && arr.at(-1) * numbers[i] > numbers[i]) {
    const value = arr.at(-1) * numbers[i];
    arr.push(value);
  } else arr.push(numbers[i]);
}

const answer = Math.round(Math.max(...arr) * 1000) / 1000;
console.log(answer.toFixed(3));
