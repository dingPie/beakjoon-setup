// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const [a, b] = input.split(" ").map((v) => Number(v));
const getGcd = (a, b) => {
  if (a % b === 0) return b;
  else return getGcd(b, a % b);
};
const gcd = getGcd(a, b);
const lcm = (a * b) / getGcd(a, b);
console.log(gcd);
console.log(lcm);
