// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let n = Number(input);

const min = n % 2 === 0 ? n / 2 : Math.ceil(n / 2);

const t = Math.floor(n / 3);

const max = n % 3 === 2 ? t * 2 + 1 : t * 2;

console.log(min, max);
