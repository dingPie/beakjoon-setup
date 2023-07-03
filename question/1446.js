// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [n, road] = input[0].split(" ").map((v) => Number(v));

const shortcuts = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

console.log(n, road);
console.log(shortcuts);

// 이거 냅색처럼 각 이걸 탈 때 안탈때 이렇게 구하면 될듯?

const dp = Array(n)
  .fill(0)
  .map((v) => Array(road).fill(0));

console.log(dp);
