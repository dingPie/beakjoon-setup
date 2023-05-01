// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const [min, max] = input.split(" ").map((v) => Number(v));

const arr = Array(max + 1)
  .fill(0)
  .map((_, i) => i);

for (let i = 2; i <= Math.sqrt(max); i++) {
  if (!i) continue;
  for (let j = i * 2; j <= max; j += i) {
    if (arr[j]) arr[j] = false;
  }
}
arr[0] = false;
arr[1] = false;

const answer = arr.slice(min).filter((v) => v);
console.log(answer.join("\n"));
