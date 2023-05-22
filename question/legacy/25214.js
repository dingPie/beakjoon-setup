// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input[1].split(" ").map((v) => Number(v));

let min = Infinity;
let value = 0;

// 현재수와 비교한 값을 추가/
// 최소값은 나중에 갱신.
const answer = [];
for (const num of numbers) {
  const nextValue = num - min;
  if (nextValue > value) value = nextValue;
  answer.push(value);
  if (num < min) min = num;
}

console.log(answer.join(" "));
