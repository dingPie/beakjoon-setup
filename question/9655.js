// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const answer = Number(input) % 2 === 1 ? "SK" : "CY";
console.log(answer);

// 1 -> SK
// 2 -> CY
// 3 -> SK
// 4 -> CY

// 5
// 11111
// 131
// 311
// 113
//...

// 6
//111111
// 1113
// ...

// 홀수는 sk, 짝수는 sy
