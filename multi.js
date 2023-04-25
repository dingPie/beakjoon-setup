// // 3. 여러 줄의 값들을 입력받을 때
const dir = "./test/1874.txt";
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const answer = [];

for (let i = 1; i < input.length; i++) {}

console.log(answer.join("\n"));
