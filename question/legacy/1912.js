// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input[1].split(" ").map((v) => Number(v));

for (let i = 1; i < numbers.length; i++) {
  numbers[i] = Math.max(numbers[i], numbers[i] + numbers[i - 1]);
}

console.log(Math.max(...numbers));
