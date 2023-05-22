// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const num = Number(input);

const f = {};
f[1] = 1n;
f[2] = 1n;
for (let i = 3; i <= num; i++) {
  f[i] = f[i - 1] + f[i - 2];
}

console.log(f[num].toString());

// let answer = 0;

// for (let i = 2 ** (num - 1); i < 2 ** num - 2 ** (num - 2); i++) {
//   const target = i.toString(2);
//   if (!target.includes("11")) answer++;
// }

// n자리 이친수의 갯수면...
// 1 -> 1
// 2 -> 2
// 3 -> 4
